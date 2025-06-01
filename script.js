// Core utilities and performance optimizations for Prompt Master waitlist page
// This file contains shared utilities used by demo.js, tutorial.js, and other components

document.addEventListener('DOMContentLoaded', async () => {
    // Constants
    const DRAGGABLE_OVERFLOW_MARGIN = 50; // Allow window to be dragged 50px outside these bounds

    // Ultra-high-performance monitoring for 120 FPS targeting
    if ('PerformanceObserver' in window) {
        try {
            const performanceObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'long-task' && entry.duration > 8.33) { // 120 FPS = 8.33ms budget
                        console.warn(`Long task detected: ${entry.duration}ms - exceeds 120 FPS budget`);
                    }
                }
            });
            
            // Check if long-task is supported before observing
            if (PerformanceObserver.supportedEntryTypes.includes('long-task')) {
                performanceObserver.observe({ entryTypes: ['long-task'] });
            }
        } catch (error) {
            console.log('Long task monitoring not supported in this browser');
        }
    }

    // Detect iOS device with better performance
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // High-performance DOM element cache with WeakMap for memory efficiency
    const domCache = new Map();
    const elementObservers = new WeakMap();
    
    const getDOMElement = (selector) => {
        if (!domCache.has(selector)) {
            const element = document.querySelector(selector);
            if (element) {
                domCache.set(selector, element);
                // Set up mutation observer for cache invalidation if needed
                if (!elementObservers.has(element)) {
                    elementObservers.set(element, true);
                }
            }
        }
        return domCache.get(selector);
    };

    // Frame-timing aware task scheduler for 120 FPS
    class FrameController {
        constructor() {
            this.rafId = null;
            this.tasks = new Set();
            this.isRunning = false;
            this.frameDeadline = 8.33; // 120 FPS budget in ms
        }

        schedule(task, priority = 'normal') {
            // Use modern scheduler API when available
            if (typeof scheduler !== 'undefined' && scheduler.postTask) {
                const priorityMap = {
                    'urgent': 'user-blocking',
                    'normal': 'user-visible', 
                    'low': 'background'
                };
                return scheduler.postTask(task, { priority: priorityMap[priority] || 'user-visible' });
            }
            
            // Fallback to custom frame-aware scheduling
            return new Promise(resolve => {
                this.tasks.add(() => {
                    const result = task();
                    resolve(result);
                });
                this.start();
            });
        }

        start() {
            if (this.isRunning) return;
            this.isRunning = true;
            this.tick();
        }

        tick() {
            const frameStart = performance.now();
            const frameDeadline = frameStart + this.frameDeadline;

            // Process tasks within frame budget
            while (this.tasks.size > 0 && performance.now() < frameDeadline) {
                const task = this.tasks.values().next().value;
                this.tasks.delete(task);
                try {
                    task();
                } catch (error) {
                    console.error('Frame task error:', error);
                }
            }

            // Continue processing if tasks remain
            if (this.tasks.size > 0) {
                this.rafId = requestAnimationFrame(() => this.tick());
            } else {
                this.isRunning = false;
            }
        }

        stop() {
            if (this.rafId) {
                cancelAnimationFrame(this.rafId);
                this.rafId = null;
            }
            this.isRunning = false;
            this.tasks.clear();
        }
    }

    const frameController = new FrameController();

    // Web Worker for heavy computational tasks
    let aiWorker = null;
    const initializeWorker = () => {
        if (!aiWorker && window.Worker) {
            const workerCode = `
                self.onmessage = function(e) {
                    const { type, data } = e.data;
                    
                    if (type === 'generateResponse') {
                        // Simulate AI response generation without blocking main thread
                        const responses = [
                            "Act as a 10x Mobile App Developer with expertise in iOS and Android development...",
                            "Create a comprehensive social media platform similar to Facebook...",
                            "Design and implement a scalable backend architecture..."
                        ];
                        
                        // Simulate processing time
                        setTimeout(() => {
                            self.postMessage({
                                type: 'responseGenerated',
                                data: responses[Math.floor(Math.random() * responses.length)]
                            });
                        }, 100);
                    }
                };
            `;
            
            const blob = new Blob([workerCode], { type: 'application/javascript' });
            aiWorker = new Worker(URL.createObjectURL(blob));
            
            aiWorker.onmessage = (e) => {
                const { type, data } = e.data;
                if (type === 'responseGenerated') {
                    frameController.schedule(() => {
                        updateAIResponse(data);
                    }, 'normal');
                }
            };
        }
    };

    // Initialize Web Worker
    initializeWorker();

    // Optimized app name updates with batch processing
    await frameController.schedule(() => {
        document.querySelectorAll('[data-trans="app-name-header"], [data-trans="app-name-footer"], [data-trans="demo-app-name"]')
            .forEach(element => {
                element.textContent = 'Prompt Master';
            });
    }, 'urgent');

    // Export core utilities to global scope for use by other modules
    window.frameController = frameController;
    window.getDOMElement = getDOMElement;
    window.DRAGGABLE_OVERFLOW_MARGIN = DRAGGABLE_OVERFLOW_MARGIN;
    window.isIOS = isIOS;
    window.initializeWorker = initializeWorker;
    window.aiWorker = aiWorker;

    // Utility functions for other modules
    window.coreUtils = {
        frameController,
        getDOMElement,
        DRAGGABLE_OVERFLOW_MARGIN,
        isIOS,
        initializeWorker,
        domCache,
        elementObservers
    };

    console.log('Core utilities initialized and available globally');
});