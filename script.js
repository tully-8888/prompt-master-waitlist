// Core utilities and performance optimizations for Prompt Master waitlist page
// This file contains shared utilities used by demo.js, tutorial.js, and other components

document.addEventListener('DOMContentLoaded', async () => {
    // Constants
    const DRAGGABLE_OVERFLOW_MARGIN = 50; // Allow window to be dragged 50px outside these bounds

    // PERFORMANCE MONITORING & OPTIMIZATION
    class PerformanceManager {
        constructor() {
            this.frameDropCount = 0;
            this.performanceMode = 'normal'; // normal, reduced, minimal
            this.isMonitoring = false;
            this.animationElements = [];
            this.intersectionObserver = null;
            this.performanceObserver = null;
            this.lastFrameTime = performance.now();
            this.frameCount = 0;
            this.fps = 60;
            
            this.init();
        }

        init() {
            this.detectDeviceCapabilities();
            this.setupPerformanceMonitoring();
            this.setupIntersectionObserver();
            this.setupReducedMotionDetection();
            this.cacheAnimationElements();
            this.startMonitoring();
        }

        detectDeviceCapabilities() {
            // Detect device capabilities and set initial performance mode
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isLowEndDevice = navigator.hardwareConcurrency <= 2;
            const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory <= 2;
            
            if (isMobile || isLowEndDevice || hasLimitedMemory) {
                this.setPerformanceMode('reduced');
            }
            
            // Check for battery API
            if ('getBattery' in navigator) {
                navigator.getBattery().then(battery => {
                    if (battery.level < 0.2 || battery.charging === false) {
                        this.setPerformanceMode('minimal');
                    }
                });
            }
        }

        setupPerformanceMonitoring() {
            // Modern Performance Observer for long tasks
            if ('PerformanceObserver' in window && PerformanceObserver.supportedEntryTypes.includes('long-task')) {
                this.performanceObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 16.67) { // 60 FPS = 16.67ms budget
                            this.frameDropCount++;
                            if (this.frameDropCount > 10) {
                                this.degradePerformance();
                            }
                        }
                    }
                });
                
                try {
                    this.performanceObserver.observe({ entryTypes: ['long-task'] });
                } catch (error) {
                    console.log('Long task monitoring not supported');
                }
            }

            // FPS monitoring fallback
            this.monitorFPS();
        }

        monitorFPS() {
            const measureFPS = (currentTime) => {
                this.frameCount++;
                const deltaTime = currentTime - this.lastFrameTime;
                
                if (deltaTime >= 1000) { // Calculate FPS every second
                    this.fps = Math.round((this.frameCount * 1000) / deltaTime);
                    this.frameCount = 0;
                    this.lastFrameTime = currentTime;
                    
                    // Auto-degrade if FPS is consistently low
                    if (this.fps < 30 && this.performanceMode === 'normal') {
                        this.setPerformanceMode('reduced');
                    } else if (this.fps < 15 && this.performanceMode === 'reduced') {
                        this.setPerformanceMode('minimal');
                    }
                }
                
                if (this.isMonitoring) {
                    requestAnimationFrame(measureFPS);
                }
            };
            
            requestAnimationFrame(measureFPS);
        }

        setupIntersectionObserver() {
            // Pause animations for elements not in viewport
            if ('IntersectionObserver' in window) {
                this.intersectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove('element-hidden');
                            entry.target.classList.add('element-visible');
                        } else {
                            entry.target.classList.remove('element-visible');
                            entry.target.classList.add('element-hidden');
                        }
                    });
                }, {
                    rootMargin: '50px',
                    threshold: 0.1
                });
            }
        }

        setupReducedMotionDetection() {
            // Listen for reduced motion preference changes
            const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            
            const handleReducedMotion = (e) => {
                if (e.matches) {
                    this.setPerformanceMode('minimal');
                    this.pauseAllAnimations();
                }
            };
            
            mediaQuery.addListener(handleReducedMotion);
            handleReducedMotion(mediaQuery); // Check initial state
        }

        cacheAnimationElements() {
            // Cache all animated elements for efficient control
            this.animationElements = [
                ...document.querySelectorAll('.geometric-shape'),
                ...document.querySelectorAll('.particle'),
                ...document.querySelectorAll('.energy-line')
            ];
            
            // Set up intersection observer for cached elements
            if (this.intersectionObserver) {
                this.animationElements.forEach(element => {
                    this.intersectionObserver.observe(element);
                });
            }
        }

        setPerformanceMode(mode) {
            if (this.performanceMode === mode) return;
            
            this.performanceMode = mode;
            document.body.classList.remove('performance-mode-normal', 'performance-mode-reduced', 'performance-mode-minimal');
            document.body.classList.add(`performance-mode-${mode}`);
            
            console.log(`Performance mode changed to: ${mode}`);
            
            // Apply mode-specific optimizations
            switch (mode) {
                case 'minimal':
                    this.pauseAllAnimations();
                    this.disableBackdropFilters();
                    break;
                case 'reduced':
                    this.reduceAnimations();
                    this.reduceBackdropFilters();
                    break;
                case 'normal':
                default:
                    this.enableAllAnimations();
                    break;
            }
        }

        pauseAllAnimations() {
            document.body.classList.add('animations-paused');
        }

        enableAllAnimations() {
            document.body.classList.remove('animations-paused');
        }

        reduceAnimations() {
            // Reduce animation complexity and frequency
            this.animationElements.forEach((element, index) => {
                if (index % 2 === 0) { // Hide every other element
                    element.style.display = 'none';
                }
            });
        }

        disableBackdropFilters() {
            const elementsWithBackdrop = document.querySelectorAll('[style*="backdrop-filter"], .language-selector, .main-header');
            elementsWithBackdrop.forEach(element => {
                element.style.backdropFilter = 'none';
                element.style.webkitBackdropFilter = 'none';
            });
        }

        reduceBackdropFilters() {
            const elementsWithBackdrop = document.querySelectorAll('.language-selector, .main-header');
            elementsWithBackdrop.forEach(element => {
                element.style.backdropFilter = 'blur(3px)';
                element.style.webkitBackdropFilter = 'blur(3px)';
            });
        }

        degradePerformance() {
            if (this.performanceMode === 'normal') {
                this.setPerformanceMode('reduced');
            } else if (this.performanceMode === 'reduced') {
                this.setPerformanceMode('minimal');
            }
        }

        startMonitoring() {
            this.isMonitoring = true;
        }

        stopMonitoring() {
            this.isMonitoring = false;
            if (this.performanceObserver) {
                this.performanceObserver.disconnect();
            }
            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect();
            }
        }

        // Public API for manual control
        getPerformanceMode() {
            return this.performanceMode;
        }

        getCurrentFPS() {
            return this.fps;
        }

        forcePerformanceMode(mode) {
            this.setPerformanceMode(mode);
        }
    }

    // Initialize Performance Manager
    const performanceManager = new PerformanceManager();

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

    // Frame-timing aware task scheduler for 60+ FPS
    class FrameController {
        constructor() {
            this.rafId = null;
            this.tasks = new Set();
            this.isRunning = false;
            this.frameDeadline = 16.67; // 60 FPS budget in ms
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
    window.performanceManager = performanceManager;

    // Utility functions for other modules
    window.coreUtils = {
        frameController,
        getDOMElement,
        DRAGGABLE_OVERFLOW_MARGIN,
        isIOS,
        initializeWorker,
        domCache,
        elementObservers,
        performanceManager
    };

    console.log('Core utilities initialized with performance monitoring');
});