document.addEventListener('DOMContentLoaded', () => {
    // High-performance DOM element cache
    const domCache = new Map();
    const getDOMElement = (selector) => {
        if (!domCache.has(selector)) {
            domCache.set(selector, document.querySelector(selector));
        }
        return domCache.get(selector);
    };

    // Frame-timing aware task scheduler for 120 FPS
    class FrameController {
        constructor() {
            this.rafId = null;
            this.tasks = new Set();
            this.isRunning = false;
            this.frameDeadline = 8.33; // 120 FPS budget
        }

            schedule(task, priority = 'normal') {
        if (typeof scheduler !== 'undefined' && scheduler.postTask) {
            const priorityMap = {
                'urgent': 'user-blocking',
                'normal': 'user-visible', 
                'low': 'background'
            };
            return scheduler.postTask(task, { priority: priorityMap[priority] || 'user-visible' });
        }
        
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

            while (this.tasks.size > 0 && performance.now() < frameDeadline) {
                const task = this.tasks.values().next().value;
                this.tasks.delete(task);
                try {
                    task();
                } catch (error) {
                    console.error('Frame task error:', error);
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

    const frameController = new FrameController();

    // Cached DOM elements for performance
    const homePage = getDOMElement('#home-page');
    const formPage = getDOMElement('#form-page');
    const joinButtons = document.querySelectorAll('.join-btn:not(.form-submit-btn)');
    const formSubmitBtn = getDOMElement('.form-submit-btn');
    const nameInput = getDOMElement('#name');
    const emailInput = getDOMElement('#email');
    const headerLogo = getDOMElement('header .logo');
    const footerLogo = getDOMElement('footer .logo');

    // High-performance page toggle with hardware acceleration
    const togglePage = () => {
        frameController.schedule(() => {
            homePage?.classList.toggle('hidden');
            formPage?.classList.toggle('hidden');
        }, 'urgent');
    };

    // Add click event to all join waitlist buttons with event delegation
    joinButtons.forEach(button => {
        button.addEventListener('click', togglePage, { passive: true });
    });

    // Ultra-optimized form submission with AbortController and modern fetch
    formSubmitBtn?.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // Use AbortController for cancellable operations
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            // Validate inputs with frame awareness
            const validationResult = await frameController.schedule(() => {
                if (!nameInput?.value.trim()) {
                    return { valid: false, error: 'name-required' };
                }
                if (!emailInput?.value.trim()) {
                    return { valid: false, error: 'email-required' };
                }
                if (!isValidEmail(emailInput.value)) {
                    return { valid: false, error: 'email-invalid' };
                }
                return { valid: true };
            }, 'urgent');

            if (!validationResult.valid) {
                const errorMessage = translations[getCurrentLanguage()][validationResult.error] || 
                                   getDefaultErrorMessage(validationResult.error);
                showCustomAlert(errorMessage, 'error');
                return;
            }

            // Prepare form data efficiently
            const formData = await frameController.schedule(() => {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const language = getCurrentLanguage();
                const userOpinion = getDOMElement('#user-opinion')?.value.trim() || '';

                // Parse name into first and last
                let firstName = name;
                let lastName = '';
                if (name.includes(' ')) {
                    const parts = name.split(' ');
                    firstName = parts.shift();
                    lastName = parts.join(' ');
                }

                return {
                    email,
                    waitlist_id: 28935,
                    first_name: firstName,
                    last_name: lastName,
                    referral_link: window.location.href,
                    metadata: {
                        language,
                        ...(userOpinion && { user_opinion: userOpinion })
                    }
                };
            }, 'normal');

            // Modern fetch with performance optimization
            const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Failed to register user`);
            }

            const data = await response.json();
            console.log('Registered:', data);

            // Update UI with success message using frame controller
            await frameController.schedule(() => {
                const thankYouTitle = translations[getCurrentLanguage()]["thank-you"] || 'Thank You!';
                const thankYouMessage = translations[getCurrentLanguage()]["thank-you-message"] || 
                                       "You've been added to our waitlist. We'll notify you when our product is ready.";
                
                if (formPage) {
                    formPage.innerHTML = `
                        <h1>${thankYouTitle}</h1>
                        <p class="subtitle">${thankYouMessage}</p>
                    `;
                }
            }, 'urgent');

        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Waitlist registration error:', error);
                const errorMessage = translations[getCurrentLanguage()]["waitlist-error"] || 
                                   'There was an error registering. Please try again later.';
                showCustomAlert(errorMessage, 'error');
            }
        } finally {
            clearTimeout(timeoutId);
        }
    }, { passive: false });

    // Add click listener to logos with performance optimization
    [headerLogo, footerLogo].forEach(logo => {
        if (logo) {
            logo.addEventListener('click', () => {
                frameController.schedule(() => {
                    window.location.reload();
                }, 'urgent');
            }, { passive: true });
        }
    });

    // Helper function to get current language
    function getCurrentLanguage() {
        return document.documentElement.lang || 'en';
    }

    // Optimized email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Default error messages fallback
    function getDefaultErrorMessage(errorType) {
        const defaults = {
            'name-required': 'Please enter your name',
            'email-required': 'Please enter your email',
            'email-invalid': 'Please enter a valid email address'
        };
        return defaults[errorType] || 'An error occurred';
    }

    // Ultra-optimized custom alert with hardware acceleration
    function showCustomAlert(message, type = 'error', duration = 5000) {
        // Remove existing alert efficiently
        const existingAlert = getDOMElement('#custom-alert-instance');
        if (existingAlert) {
            existingAlert.remove();
            domCache.delete('#custom-alert-instance');
        }

        // Create alert element with DocumentFragment for performance
        const fragment = document.createDocumentFragment();
        const alertElement = document.createElement('div');
        alertElement.id = 'custom-alert-instance';
        alertElement.className = 'custom-alert-notification';
        
        if (type) {
            alertElement.classList.add(type);
        }
        
        alertElement.setAttribute('role', 'alert');
        alertElement.setAttribute('aria-live', 'assertive');

        // Optimize icon selection
        const iconMap = {
            'error': '⚠️',
            'success': '✅'
        };
        const iconHTML = iconMap[type] ? `<span class="alert-icon">${iconMap[type]}</span>` : '';

        const closeButtonAriaLabel = translations[getCurrentLanguage()]?.['aria-close-alert'] || 'Close alert';
        
        alertElement.innerHTML = `
            ${iconHTML}
            <p class="alert-message">${message}</p>
            <button class="alert-close-btn" aria-label="${closeButtonAriaLabel}">&times;</button>
        `;

        fragment.appendChild(alertElement);

        // Use frame controller for smooth DOM updates
        frameController.schedule(() => {
            document.body.appendChild(fragment);
            domCache.set('#custom-alert-instance', alertElement);

            const closeButton = alertElement.querySelector('.alert-close-btn');
            let autoCloseTimeout;

            const dismissAlert = () => {
                clearTimeout(autoCloseTimeout);
                
                // Use hardware-accelerated animation
                alertElement.style.transform = 'translate3d(100%, 0, 0)';
                alertElement.style.opacity = '0';
                
                alertElement.addEventListener('transitionend', () => {
                    if (alertElement.parentNode) {
                        alertElement.remove();
                        domCache.delete('#custom-alert-instance');
                    }
                }, { once: true });
            };

            closeButton.addEventListener('click', dismissAlert, { passive: true });

            if (duration > 0) {
                autoCloseTimeout = setTimeout(dismissAlert, duration);
            }

            // Trigger reflow and show alert with hardware acceleration
            void alertElement.offsetWidth;
            requestAnimationFrame(() => {
                alertElement.classList.add('show');
            });
        }, 'urgent');
    }
});
