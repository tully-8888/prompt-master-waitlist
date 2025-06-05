// Performance-optimized waitlist functionality for Prompt Master
// Lightweight implementation with minimal DOM manipulation

document.addEventListener('DOMContentLoaded', async () => {
    // Wait for core utilities to be available
    if (typeof window.frameController === 'undefined') {
        console.warn('Waitlist.js loaded before core utilities');
        return;
    }

    const frameController = window.frameController;
    const performanceManager = window.performanceManager;

    // Lightweight DOM element getter
    const getDOMElement = (selector) => {
        return document.querySelector(selector);
    };

    // Optimized FrameController for waitlist-specific tasks
    class WaitlistFrameController {
        constructor() {
            this.rafId = null;
            this.tasks = new Set();
            this.isRunning = false;
        }

        schedule(task, priority = 'normal') {
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
            const frameDeadline = frameStart + 16.67; // 60 FPS budget

            while (this.tasks.size > 0 && performance.now() < frameDeadline) {
                const task = this.tasks.values().next().value;
                this.tasks.delete(task);
                try {
                    task();
                } catch (error) {
                    console.error('Waitlist task error:', error);
                }
            }

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

    const waitlistFrameController = new WaitlistFrameController();

    // Page state management
    let currentPage = 'home';
    const pages = {
        home: getDOMElement('#home-page'),
        form: getDOMElement('#form-page')
    };

    // Performance-optimized page toggle
    const togglePage = () => {
        waitlistFrameController.schedule(() => {
            if (currentPage === 'home') {
                pages.home?.classList.add('hidden');
                pages.form?.classList.remove('hidden');
                currentPage = 'form';
                
                // Focus on first input for better UX
                const nameInput = getDOMElement('#name');
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 100);
                }
            } else {
                pages.form?.classList.add('hidden');
                pages.home?.classList.remove('hidden');
                currentPage = 'home';
            }
        }, 'urgent');
    };

    // Lightweight form validation
    function getCurrentLanguage() {
        return document.documentElement.lang || 'en';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function getDefaultErrorMessage(errorType) {
        const messages = {
            'invalid-email': 'Please enter a valid email address',
            'network-error': 'Network error. Please try again.',
            'server-error': 'Server error. Please try again later.',
            'unknown-error': 'An error occurred. Please try again.'
        };
        return messages[errorType] || messages['unknown-error'];
    }

    // Performance-optimized alert system
    function showCustomAlert(message, type = 'error', duration = 5000) {
        waitlistFrameController.schedule(() => {
            // Remove existing alerts
            const existingAlerts = document.querySelectorAll('.custom-alert-notification');
            existingAlerts.forEach(alert => alert.remove());

            // Create new alert
            const alertElement = document.createElement('div');
            alertElement.className = `custom-alert-notification ${type}`;
            alertElement.innerHTML = `
                <div class="alert-icon">${type === 'success' ? '✓' : '⚠'}</div>
                <div class="alert-message">${message}</div>
                <button class="alert-close-btn" aria-label="Close">&times;</button>
            `;

            // Add to DOM
            document.body.appendChild(alertElement);

            // Show with animation
            requestAnimationFrame(() => {
                alertElement.classList.add('show');
            });

            // Auto-dismiss and close button
            const dismissAlert = () => {
                alertElement.classList.remove('show');
                setTimeout(() => {
                    if (alertElement.parentNode) {
                        alertElement.remove();
                    }
                }, 300);
            };

            const closeBtn = alertElement.querySelector('.alert-close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', dismissAlert, { once: true });
            }

            if (duration > 0) {
                setTimeout(dismissAlert, duration);
            }
        }, 'urgent');
    }

    // Optimized form submission
    async function submitWaitlistForm(formData) {
        try {
            const response = await fetch('https://api.promptmaster.ai/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                signal: AbortSignal.timeout(10000) // 10 second timeout
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            return { success: true, data: result };
        } catch (error) {
            console.error('Waitlist submission error:', error);
            
            if (error.name === 'AbortError') {
                return { success: false, error: 'network-error' };
            } else if (error.message.includes('HTTP 4')) {
                return { success: false, error: 'invalid-email' };
            } else if (error.message.includes('HTTP 5')) {
                return { success: false, error: 'server-error' };
            } else {
                return { success: false, error: 'unknown-error' };
            }
        }
    }

    // Form submission handler
    async function handleFormSubmit(event) {
        event.preventDefault();
        
        const submitBtn = getDOMElement('.form-submit-btn');
        const nameInput = getDOMElement('#name');
        const emailInput = getDOMElement('#email');
        const opinionInput = getDOMElement('#user-opinion');

        if (!submitBtn || !emailInput) return;

        const email = emailInput.value.trim();
        const name = nameInput?.value.trim() || '';
        const opinion = opinionInput?.value.trim() || '';

        // Validate email
        if (!email) {
            showCustomAlert('Please enter your email address', 'error');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            showCustomAlert(getDefaultErrorMessage('invalid-email'), 'error');
            emailInput.focus();
            return;
        }

        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        try {
            // Prepare form data
            const formData = {
                email,
                name,
                opinion,
                timestamp: new Date().toISOString(),
                language: getCurrentLanguage(),
                userAgent: navigator.userAgent,
                performanceMode: performanceManager?.getPerformanceMode() || 'unknown'
            };

            // Submit form
            const result = await submitWaitlistForm(formData);

            if (result.success) {
                showCustomAlert('Thank you! You\'ve been added to our waitlist.', 'success');
                
                // Reset form
                if (nameInput) nameInput.value = '';
                emailInput.value = '';
                if (opinionInput) opinionInput.value = '';
                
                // Return to home page after success
                setTimeout(() => {
                    togglePage();
                }, 2000);
            } else {
                showCustomAlert(getDefaultErrorMessage(result.error), 'error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showCustomAlert(getDefaultErrorMessage('unknown-error'), 'error');
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    // Initialize waitlist functionality
    function initializeWaitlist() {
        // Get all join buttons
        const joinButtons = document.querySelectorAll('.join-btn, .main-join-btn');
        
        // Add click handlers to join buttons
        joinButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                togglePage();
            }, { passive: false });
        });

        // Add form submit handler
        const formContainer = getDOMElement('.form-container');
        if (formContainer) {
            formContainer.addEventListener('submit', handleFormSubmit, { passive: false });
        }

        // Add submit button handler as fallback
        const submitBtn = getDOMElement('.form-submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const form = submitBtn.closest('.form-container');
                if (form) {
                    handleFormSubmit(e);
                }
            }, { passive: false });
        }

        // Add escape key handler to close form
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && currentPage === 'form') {
                togglePage();
            }
        }, { passive: true });
    }

    // Initialize when DOM is ready
    waitlistFrameController.schedule(() => {
        initializeWaitlist();
        console.log('Waitlist functionality initialized');
    }, 'urgent');

    // Export waitlist functions
    window.waitlistFunctions = {
        togglePage,
        submitWaitlistForm,
        showCustomAlert,
        getCurrentLanguage,
        isValidEmail
    };
});
