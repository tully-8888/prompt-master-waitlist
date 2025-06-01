// Demo functionality for Prompt Master waitlist page
// This file contains all demo-related code separated from core utilities

// Import shared utilities (these will be available globally from script.js)
// - frameController
// - getDOMElement
// - DRAGGABLE_OVERFLOW_MARGIN

document.addEventListener('DOMContentLoaded', async () => {
    // Wait for core utilities to be available
    if (typeof window.frameController === 'undefined') {
        console.warn('Demo.js loaded before core utilities. Demo functionality may not work properly.');
        return;
    }

    const frameController = window.frameController;
    const getDOMElement = window.getDOMElement;
    const DRAGGABLE_OVERFLOW_MARGIN = window.DRAGGABLE_OVERFLOW_MARGIN || 50;

    // Demo-specific DOM elements
    const [
        miniScreenDemo,
        macAppWindow,
        chatgptBrowser,
        tutorialOverlay,
        perfectAlertOverlay
    ] = await Promise.all([
        '.mini-screen-demo',
        '#lg-control-app',
        '#chatgpt-browser',
        '#tutorial-overlay',
        '#perfect-alert-overlay'
    ].map(selector => 
        frameController.schedule(() => getDOMElement(selector), 'urgent')
    ));

    // Performance-optimized element queries with caching
    const macSidebarInput = macAppWindow?.querySelector('.sidebar-input');
    const macSidebarInputBtn = macAppWindow?.querySelector('.sidebar-input-btn');
    const dateTimeSpan = getDOMElement('.mini-menu-bar .datetime');
    
    // ChatGPT Browser Window Elements with performance caching
    const chatInput = chatgptBrowser?.querySelector('.chat-input');
    const sendBtn = chatgptBrowser?.querySelector('.send-btn');
    const chatMessages = chatgptBrowser?.querySelector('.chat-messages');
    const newChatBtn = chatgptBrowser?.querySelector('.new-chat-btn');
    const chatItems = chatgptBrowser?.querySelectorAll('.chat-item');
    
    // Tutorial Elements with performance optimization
    const copyButton = getDOMElement('#copy-selected-text');
    const pasteButton = getDOMElement('#paste-text-button');
    const copyOptimizedButton = getDOMElement('#copy-optimized-prompt');
    const pasteToChatGPTButton = getDOMElement('#paste-to-chatgpt');
    const restartButton = getDOMElement('#restart-tutorial');
    
    // Demo State Variables
    let isDragging = false;
    let isDraggingBrowser = false;
    let offsetX, offsetY;
    let browserOffsetX, browserOffsetY;

    // High-performance date/time update with frame awareness
    function updateDateTime() {
        if (!dateTimeSpan) return;
        
        frameController.schedule(() => {
            const now = new Date();
            const options = { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: false 
            };
            dateTimeSpan.textContent = now.toLocaleDateString('en-US', options).replace(',', '');
        }, 'low');
    }

    // Optimized input submission with async processing and AbortController
    async function handleInputSubmission() {
        const input = macSidebarInput;
        const responseArea = getDOMElement('#prompt-response');
        
        if (!input || !responseArea) return;
        
        // Use AbortController for cancellable operations
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        try {
            if (window.tutorialFunctions && window.tutorialFunctions.tutorialActive && window.tutorialFunctions.currentTutorialStep === 3) {
                await frameController.schedule(() => window.tutorialFunctions.handlePromptMasterGenerate(), 'urgent');
                return;
            }
            
            // Batch DOM updates for performance using DocumentFragment
            const fragment = document.createDocumentFragment();
            await frameController.schedule(() => {
                responseArea.style.display = 'block';
                responseArea.style.opacity = '0';
                responseArea.style.transform = 'translate3d(0, 10px, 0)'; // Hardware acceleration
            }, 'urgent');
            
            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                responseArea.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                responseArea.style.opacity = '1';
                responseArea.style.transform = 'translate3d(0, 0, 0)';
            });
            
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Input submission error:', error);
            }
        } finally {
            clearTimeout(timeoutId);
        }
    }

    // Performance-optimized event handlers with passive listeners
    function handleInputKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            frameController.schedule(() => handleInputSubmission(), 'urgent');
        }
    }

    // Switch to premium settings view (used by remote button)
    window.switchToPremiumSettings = () => {
         const premiumButton = macAppWindow?.querySelector('.nav-item[data-target="premium"]');
         
         if(premiumButton) {
             premiumButton.click(); // Simulate click on sidebar/tab item
         }
    };

    // Memory-efficient drag handling with hardware acceleration
    function startDrag(e) {
        if (!macAppWindow || !miniScreenDemo) return;

        isDragging = true;
        
        // Batch DOM reads to avoid layout thrashing
        const measurements = frameController.schedule(() => {
            const initialWindowRect = macAppWindow.getBoundingClientRect();
            const demoContainerRect = miniScreenDemo.getBoundingClientRect();
            
            return {
                currentPixelLeft: initialWindowRect.left - demoContainerRect.left,
                currentPixelTop: initialWindowRect.top - demoContainerRect.top,
                windowRect: initialWindowRect
            };
        }, 'urgent');

        measurements.then(({ currentPixelLeft, currentPixelTop, windowRect }) => {
            // Batch DOM writes
            frameController.schedule(() => {
                macAppWindow.classList.add('dragging');
                macAppWindow.style.transform = 'none';
                macAppWindow.style.left = `${currentPixelLeft}px`;
                macAppWindow.style.top = `${currentPixelTop}px`;
            }, 'urgent');

            // Calculate offsets after style stabilization
            requestAnimationFrame(() => {
                const stabilizedRect = macAppWindow.getBoundingClientRect();
                offsetX = e.clientX - stabilizedRect.left;
                offsetY = e.clientY - stabilizedRect.top;
            });
        });

        // Use passive listeners for better performance
        document.addEventListener('mousemove', dragWindow, { passive: false });
        document.addEventListener('mouseup', stopDrag, { passive: true });
        document.addEventListener('mouseleave', stopDrag, { passive: true });
    }

    // Optimized drag with frame-aware updates
    function dragWindow(e) {
        if (!isDragging || !macAppWindow || !miniScreenDemo) return;
        e.preventDefault();

        // Use requestAnimationFrame for smooth dragging
        requestAnimationFrame(() => {
            const demoRect = miniScreenDemo.getBoundingClientRect();
            
            let newX = e.clientX - demoRect.left - offsetX;
            let newY = e.clientY - demoRect.top - offsetY;
            
            // Calculate boundaries
            const minLeft = -DRAGGABLE_OVERFLOW_MARGIN;
            const maxLeft = demoRect.width - macAppWindow.offsetWidth + DRAGGABLE_OVERFLOW_MARGIN;
            const minTop = 0;
            const maxTop = demoRect.height - macAppWindow.offsetHeight + DRAGGABLE_OVERFLOW_MARGIN;

            // Apply constraints
            newX = Math.max(minLeft, Math.min(newX, maxLeft));
            newY = Math.max(minTop, Math.min(newY, maxTop));

            // Use transform for hardware acceleration
            macAppWindow.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
            macAppWindow.style.left = '0';
            macAppWindow.style.top = '0';
        });
    }

    // Memory-efficient cleanup
    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        
        frameController.schedule(() => {
            if (macAppWindow) {
                macAppWindow.classList.remove('dragging');
            }
        }, 'urgent');
        
        document.removeEventListener('mousemove', dragWindow);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('mouseleave', stopDrag);
    }

    // Browser Window Drag Functions with performance optimization
    function startBrowserDrag(e) {
        if (!chatgptBrowser || !miniScreenDemo) return;

        isDraggingBrowser = true;
        
        // Use frameController for non-blocking DOM operations
        frameController.schedule(() => {
            chatgptBrowser.classList.add('dragging');
            
            const initialBrowserRect = chatgptBrowser.getBoundingClientRect();
            const demoContainerRect = miniScreenDemo.getBoundingClientRect();

            const currentPixelLeft = initialBrowserRect.left - demoContainerRect.left;
            const currentPixelTop = initialBrowserRect.top - demoContainerRect.top;

            chatgptBrowser.style.transform = 'none';
            chatgptBrowser.style.left = `${currentPixelLeft}px`;
            chatgptBrowser.style.top = `${currentPixelTop}px`;
           
            const stabilizedBrowserRect = chatgptBrowser.getBoundingClientRect();
            browserOffsetX = e.clientX - stabilizedBrowserRect.left;
            browserOffsetY = e.clientY - stabilizedBrowserRect.top;
        }, 'urgent');

        document.addEventListener('mousemove', dragBrowserWindow, { passive: false });
        document.addEventListener('mouseup', stopBrowserDrag, { passive: true });
        document.addEventListener('mouseleave', stopBrowserDrag, { passive: true });
    }

    function dragBrowserWindow(e) {
        if (!isDraggingBrowser || !chatgptBrowser || !miniScreenDemo) return;
        e.preventDefault();

        // Use requestAnimationFrame for smooth dragging
        requestAnimationFrame(() => {
            const demoRect = miniScreenDemo.getBoundingClientRect();

            let newX = e.clientX - demoRect.left - browserOffsetX;
            let newY = e.clientY - demoRect.top - browserOffsetY;
            
            const minLeft = -DRAGGABLE_OVERFLOW_MARGIN;
            const maxLeft = demoRect.width - chatgptBrowser.offsetWidth + DRAGGABLE_OVERFLOW_MARGIN;
            const minTop = 0;
            const maxTop = demoRect.height - chatgptBrowser.offsetHeight + DRAGGABLE_OVERFLOW_MARGIN;

            newX = Math.max(minLeft, Math.min(newX, maxLeft));
            newY = Math.max(minTop, Math.min(newY, maxTop));

            // Use transform for hardware acceleration
            chatgptBrowser.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
            chatgptBrowser.style.left = '0';
            chatgptBrowser.style.top = '0';
        });
    }

    function stopBrowserDrag() {
        if (!isDraggingBrowser) return;
        isDraggingBrowser = false;
        
        frameController.schedule(() => {
            if (chatgptBrowser) {
                chatgptBrowser.classList.remove('dragging');
            }
        }, 'urgent');
        
        document.removeEventListener('mousemove', dragBrowserWindow);
        document.removeEventListener('mouseup', stopBrowserDrag);
        document.removeEventListener('mouseleave', stopBrowserDrag);
    }

    // Export demo functions to global scope for external access
    window.demoFunctions = {
        updateDateTime,
        handleInputSubmission,
        startDrag,
        dragWindow,
        stopDrag,
        startBrowserDrag,
        dragBrowserWindow,
        stopBrowserDrag
    };

    // Initialize demo functionality
    if (miniScreenDemo && macAppWindow) { 
        updateDateTime();
        // Use more efficient interval for time updates
        setInterval(updateDateTime, 60000); 

        // Attach event listeners with performance optimization
        const appTitleBar = macAppWindow.querySelector('.app-title-bar');
        if (appTitleBar) {
            appTitleBar.addEventListener('mousedown', startDrag, { passive: false });
        }

        // Add optimized sidebar event listeners
        if (macSidebarInput) {
            macSidebarInput.addEventListener('keypress', handleInputKeyPress, { passive: false });
            macSidebarInput.addEventListener('paste', (e) => {
                if (window.tutorialFunctions && window.tutorialFunctions.tutorialActive && window.tutorialFunctions.currentTutorialStep === 2) {
                    frameController.schedule(() => {
                        setTimeout(() => window.tutorialFunctions.checkPasteInPromptMaster(), 100);
                    }, 'urgent');
                }
            }, { passive: true });
        }
        
        if (macSidebarInputBtn) {
            macSidebarInputBtn.addEventListener('click', () => {
                frameController.schedule(() => handleInputSubmission(), 'urgent');
            }, { passive: true });
        }
    }

    // Optimized chat input with async processing
    async function handleChatInputSubmit() {
        if (!chatInput || !chatMessages) return;
        
        const message = chatInput.value.trim();
        if (!message) return;

        // Create message elements using DocumentFragment for performance
        const fragment = document.createDocumentFragment();
        
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-content">
                <p>${message.length > 200 ? message.substring(0, 200) + '...' : message}</p>
            </div>
        `;
        fragment.appendChild(userMessage);

        // Batch DOM updates
        await frameController.schedule(() => {
            chatMessages.appendChild(fragment);
            chatInput.value = '';
            chatInput.style.height = 'auto';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 'urgent');

        // Simulate AI response with Web Worker for heavy processing
        const aiResponseWorker = new Worker(URL.createObjectURL(new Blob([`
            self.onmessage = function(e) {
                const { message } = e.data;
                const isOptimizedPrompt = message.includes('10x Mobile App Developer') || message.length > 500;
                
                const response = isOptimizedPrompt ? 
                    generateOptimizedResponse() : 
                    generateStandardResponse();
                
                self.postMessage({ response, isOptimized: isOptimizedPrompt });
            };
            
            function generateOptimizedResponse() {
                return \`<p><strong>Excellent!</strong> This is a much more detailed and professional prompt. I can see you've included:</p>
                        <ul>
                            <li>Specific role definition (10x Mobile App Developer)</li>
                            <li>Clear technical requirements and constraints</li>
                            <li>Detailed feature specifications</li>
                            <li>Architecture and technology stack guidance</li>
                            <li>Quality standards and best practices</li>
                        </ul>
                        <p>This optimized prompt will help me provide much more targeted, professional, and actionable advice for your Facebook-like mobile app project.</p>\`;
            }
            
            function generateStandardResponse() {
                return \`<p>I understand you're interested in that topic. Let me help you with that!</p>\`;
            }
        `], { type: 'application/javascript' })));

        aiResponseWorker.postMessage({ message });
        
        aiResponseWorker.onmessage = async (e) => {
            const { response } = e.data;
            
            const aiMessage = document.createElement('div');
            aiMessage.className = 'message assistant-message';
            aiMessage.innerHTML = `
                <div class="message-avatar">
                    <div class="chatgpt-logo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                        </svg>
                    </div>
                </div>
                <div class="message-content">
                    ${response}
                </div>
            `;
            
            await frameController.schedule(() => {
                chatMessages.appendChild(aiMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 'urgent');
            
            // Clean up worker
            aiResponseWorker.terminate();
        };
    }

    // Performance-optimized event handlers
    function handleChatInputKeyPress(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            frameController.schedule(() => handleChatInputSubmit(), 'urgent');
        }
    }

    // Optimized auto-resize with frame awareness
    function autoResizeChatInput() {
        if (!chatInput) return;
        
        requestAnimationFrame(() => {
            chatInput.style.height = 'auto';
            chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
        });
    }

    // Memory-efficient chat management
    async function handleNewChat() {
        if (!chatMessages) return;
        
        // Use DocumentFragment for efficient DOM manipulation
        const fragment = document.createDocumentFragment();
        const messages = chatMessages.querySelectorAll('.message');
        
        // Keep only first two messages, remove others efficiently
        await frameController.schedule(() => {
            for (let i = 2; i < messages.length; i++) {
                messages[i].remove();
            }
            
            if (chatInput) {
                chatInput.value = '';
                chatInput.style.height = 'auto';
            }
        }, 'urgent');
    }

    // Optimized chat item click with event delegation
    function handleChatItemClick(e) {
        const chatItem = e.currentTarget;
        
        frameController.schedule(() => {
            // Remove active class from all items efficiently
            chatItems.forEach(item => item.classList.remove('active'));
            chatItem.classList.add('active');
        }, 'urgent');
    }

    // Initialize ChatGPT Browser Window with performance optimization
    if (chatgptBrowser) {
        const browserHeader = chatgptBrowser.querySelector('.browser-header');
        if (browserHeader) {
            browserHeader.addEventListener('mousedown', startBrowserDrag, { passive: false });
        }

        // Optimized chat input functionality
        if (chatInput) {
            chatInput.addEventListener('keypress', handleChatInputKeyPress, { passive: false });
            chatInput.addEventListener('input', autoResizeChatInput, { passive: true });
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                if (window.tutorialFunctions && window.tutorialFunctions.tutorialActive && window.tutorialFunctions.currentTutorialStep === 6) {
                    frameController.schedule(() => window.tutorialFunctions.handleChatGPTSend(), 'urgent');
                } else {
                    frameController.schedule(() => handleChatInputSubmit(), 'urgent');
                }
            }, { passive: true });
        }

        // Optimized event listeners
        if (newChatBtn) {
            newChatBtn.addEventListener('click', () => {
                frameController.schedule(() => handleNewChat(), 'urgent');
            }, { passive: true });
        }

        // Use event delegation for better performance
        if (chatItems.length > 0) {
            chatItems.forEach(item => {
                item.addEventListener('click', handleChatItemClick, { passive: true });
            });
        }

        // Optimized browser controls with event delegation
        const browserControls = chatgptBrowser.querySelectorAll('.browser-btn');
        browserControls.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                frameController.schedule(() => {
                    btn.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        btn.style.transform = 'scale(1)';
                    }, 100);
                }, 'urgent');
            }, { passive: true });
        });
    }

    // Set default background for demo screen
    if (miniScreenDemo) {
        await frameController.schedule(() => {
            miniScreenDemo.style.backgroundImage = '';
            miniScreenDemo.style.backgroundColor = '#000';
        }, 'urgent');
    }

    // Add chat functions to exports
    window.demoFunctions = {
        ...window.demoFunctions,
        handleChatInputSubmit,
        handleChatInputKeyPress,
        autoResizeChatInput,
        handleNewChat,
        handleChatItemClick
    };
});
