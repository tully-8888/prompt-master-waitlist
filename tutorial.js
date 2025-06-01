// Tutorial functionality for Prompt Master demo
// This file contains all tutorial-related code

document.addEventListener('DOMContentLoaded', async () => {
    // Wait for core utilities to be available
    if (typeof window.frameController === 'undefined') {
        console.warn('Tutorial.js loaded before core utilities. Tutorial functionality may not work properly.');
        return;
    }

    const frameController = window.frameController;
    const getDOMElement = window.getDOMElement;

    // Tutorial-specific DOM elements
    const tutorialOverlay = getDOMElement('#tutorial-overlay');
    const perfectAlertOverlay = getDOMElement('#perfect-alert-overlay');
    const macAppWindow = getDOMElement('#lg-control-app');
    const chatgptBrowser = getDOMElement('#chatgpt-browser');
    const miniScreenDemo = getDOMElement('.mini-screen-demo');
    
    // Tutorial Elements
    const copyButton = getDOMElement('#copy-selected-text');
    const pasteButton = getDOMElement('#paste-text-button');
    const copyOptimizedButton = getDOMElement('#copy-optimized-prompt');
    const pasteToChatGPTButton = getDOMElement('#paste-to-chatgpt');
    const restartButton = getDOMElement('#restart-tutorial');

    // Tutorial state
    let currentTutorialStep = 0;
    let optimizedPromptText = '';
    let tutorialActive = false;

    // Get elements from demo
    const macSidebarInput = macAppWindow?.querySelector('.sidebar-input');
    const chatInput = chatgptBrowser?.querySelector('.chat-input');
    const chatMessages = chatgptBrowser?.querySelector('.chat-messages');
    const sendBtn = chatgptBrowser?.querySelector('.send-btn');

    // Tutorial Functions
    function startTutorial() {
        tutorialActive = true;
        currentTutorialStep = 1;
        tutorialOverlay.style.display = 'flex';
        showTutorialStep(1);
        
        // Set the ChatGPT input to have the hardcoded text and make it readonly
        if (chatInput) {
            chatInput.value = 'create mobile app like facebook';
            chatInput.style.height = 'auto';
            chatInput.setAttribute('readonly', 'true');
            chatInput.classList.add('tutorial-disabled');
        }
        
        // Also disable the wrapper
        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
        if (chatInputWrapper) {
            chatInputWrapper.classList.add('tutorial-disabled');
        }
        
        // Clear Prompt Master input and set it to disabled initially
        if (macSidebarInput) {
            macSidebarInput.value = '';
            macSidebarInput.classList.add('tutorial-disabled');
            macSidebarInput.setAttribute('readonly', 'true');
        }
        
        // Set sidebar container to tutorial-active state
        const sidebarInputContainer = macAppWindow?.querySelector('.sidebar-input-container');
        if (sidebarInputContainer) {
            sidebarInputContainer.classList.add('tutorial-active');
        }
        
        // Hide response area
        const responseArea = document.getElementById('prompt-response');
        if (responseArea) {
            responseArea.style.display = 'none';
        }
    }

    function showTutorialStep(step) {
        // Hide all steps
        document.querySelectorAll('.tutorial-step').forEach(s => s.style.display = 'none');
        
        // Show current step
        const stepElement = document.getElementById(`step-${step}`);
        if (stepElement) {
            stepElement.style.display = 'block';
            
            // Add positioning classes and adjust positions for better visibility
            stepElement.classList.remove('step-chatgpt', 'step-prompt-master', 'step-center');
            if (step === 1 || step === 5 || step === 6) {
                stepElement.classList.add('step-chatgpt');
                // Position relative to ChatGPT window for better visibility
                stepElement.style.top = '2%';
                stepElement.style.left = '1%';
                stepElement.style.right = 'auto';
                stepElement.style.transform = 'none';
            } else if (step === 2 || step === 3 || step === 4) {
                stepElement.classList.add('step-prompt-master');
                // Position relative to Prompt Master window for better visibility
                stepElement.style.top = '2%';
                stepElement.style.right = '1%';
                stepElement.style.left = 'auto';
                stepElement.style.transform = 'none';
            } else {
                stepElement.classList.add('step-center');
                stepElement.style.top = '50%';
                stepElement.style.left = '50%';
                stepElement.style.right = 'auto';
                stepElement.style.transform = 'translate(-50%, -50%)';
            }
        }
        
        // Apply blur and spotlight effects
        applyTutorialEffects(step);
        
        // Handle step-specific logic
        if (step === 1) {
            // Simulate text selection in ChatGPT input and show copy button
            setTimeout(() => {
                simulateChatGPTTextSelection();
            }, 1000);
        }
    }

    function applyTutorialEffects(step) {
        // Remove all existing effects
        removeAllTutorialEffects();
        
        // Add tutorial-active class to demo container
        if (miniScreenDemo) {
            miniScreenDemo.classList.add('tutorial-active');
        }
        
        // Make overlay interactive for certain steps
        if (step <= 6) {
            tutorialOverlay.classList.add('interactive');
        }
        
        // Disable send button during tutorial except for step 6
        if (sendBtn) {
            if (step === 6) {
                sendBtn.classList.remove('tutorial-disabled');
            } else {
                sendBtn.classList.add('tutorial-disabled');
            }
        }
        
        // Disable ChatGPT input during steps 1, 5, and 6
        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
        if (chatInput && chatInputWrapper) {
            if (step === 1 || step === 5 || step === 6) {
                chatInput.classList.add('tutorial-disabled');
                chatInputWrapper.classList.add('tutorial-disabled');
                // Make input readonly to prevent any modification
                chatInput.setAttribute('readonly', 'true');
            } else {
                chatInput.classList.remove('tutorial-disabled');
                chatInputWrapper.classList.remove('tutorial-disabled');
                chatInput.removeAttribute('readonly');
            }
        }
        
        // Disable Prompt Master input during tutorial except for step 2
        const sidebarInputContainer = macAppWindow?.querySelector('.sidebar-input-container');
        if (macSidebarInput && sidebarInputContainer) {
            if (step !== 2) {
                macSidebarInput.classList.add('tutorial-disabled');
                macSidebarInput.setAttribute('readonly', 'true');
                sidebarInputContainer.classList.add('tutorial-active');
            } else {
                macSidebarInput.classList.remove('tutorial-disabled');
                macSidebarInput.removeAttribute('readonly');
                sidebarInputContainer.classList.remove('tutorial-active');
            }
        }
        
        // Apply spotlight to specific elements based on step
        if (step === 1) {
            // Spotlight on ChatGPT browser and specific input
            if (chatgptBrowser) {
                chatgptBrowser.classList.add('tutorial-spotlight');
            }
            if (chatInput) {
                chatInput.classList.add('tutorial-spotlight-input');
            }
        } else if (step === 2 || step === 3) {
            // Spotlight on Prompt Master app and specific input/button
            if (macAppWindow) {
                macAppWindow.classList.add('tutorial-spotlight');
            }
            if (step === 2 && macSidebarInput) {
                macSidebarInput.classList.add('tutorial-spotlight-input');
            }
            const macSidebarInputBtn = macAppWindow?.querySelector('.sidebar-input-btn');
            if (step === 3 && macSidebarInputBtn) {
                macSidebarInputBtn.classList.add('tutorial-spotlight-input');
            }
        } else if (step === 4) {
            // Spotlight on Prompt Master for copying optimized prompt
            if (macAppWindow) {
                macAppWindow.classList.add('tutorial-spotlight');
            }
        } else if (step === 5 || step === 6) {
            // Spotlight on ChatGPT for pasting and sending
            if (chatgptBrowser) {
                chatgptBrowser.classList.add('tutorial-spotlight');
            }
            if (step === 5 && chatInput) {
                chatInput.classList.add('tutorial-spotlight-input');
            }
            if (step === 6 && sendBtn) {
                sendBtn.classList.add('tutorial-spotlight-input');
            }
        }
    }

    function removeAllTutorialEffects() {
        // Remove tutorial-active class from demo container
        if (miniScreenDemo) {
            miniScreenDemo.classList.remove('tutorial-active');
        }
        
        // Remove all tutorial classes
        document.querySelectorAll('.tutorial-spotlight, .tutorial-blur, .tutorial-spotlight-input').forEach(el => {
            el.classList.remove('tutorial-spotlight', 'tutorial-blur', 'tutorial-spotlight-input');
        });
        
        // Remove disabled state from send button
        if (sendBtn) {
            sendBtn.classList.remove('tutorial-disabled');
        }
        
        // Remove disabled state from ChatGPT input
        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
        if (chatInput && chatInputWrapper) {
            chatInput.classList.remove('tutorial-disabled');
            chatInputWrapper.classList.remove('tutorial-disabled');
            chatInput.removeAttribute('readonly');
        }
        
        // Remove disabled state from Prompt Master input
        const sidebarInputContainer = macAppWindow?.querySelector('.sidebar-input-container');
        if (macSidebarInput && sidebarInputContainer) {
            macSidebarInput.classList.remove('tutorial-disabled');
            macSidebarInput.removeAttribute('readonly');
            sidebarInputContainer.classList.remove('tutorial-active');
        }
        
        // Remove highlights
        removeAllHighlights();
        
        // Make overlay non-interactive
        tutorialOverlay.classList.remove('interactive');
    }

    function removeAllHighlights() {
        document.querySelectorAll('.active-highlight').forEach(h => h.remove());
    }

    function simulateChatGPTTextSelection() {
        if (!chatInput) return;
        
        // Add visual selection effect
        chatInput.classList.add('text-selected');
        chatInput.focus();
        chatInput.select(); // Actually select the text
        
        // Store the selected text
        optimizedPromptText = chatInput.value;
        
        // Don't auto-advance to step 2 - wait for copy button click
    }

    function handleCopyButtonClick() {
        if (!tutorialActive || currentTutorialStep !== 1) return;
        
        // Copy the text to clipboard and store it
        if (chatInput && chatInput.value) {
            optimizedPromptText = chatInput.value; // Store for paste button fallback
            
            navigator.clipboard.writeText(chatInput.value).then(() => {
                // Remove selection effect
                chatInput.classList.remove('text-selected');
                
                // Move to step 2
                setTimeout(() => {
                    currentTutorialStep = 2;
                    showTutorialStep(2);
                    // Focus on Prompt Master input
                    if (macSidebarInput) {
                        macSidebarInput.focus();
                    }
                }, 500);
            }).catch(() => {
                // Fallback for older browsers
                chatInput.classList.remove('text-selected');
                currentTutorialStep = 2;
                showTutorialStep(2);
                if (macSidebarInput) {
                    macSidebarInput.focus();
                }
            });
        }
    }

    function handlePasteButtonClick() {
        if (!tutorialActive || currentTutorialStep !== 2) return;
        
        // Try to read from clipboard and paste into Prompt Master input
        if (navigator.clipboard && navigator.clipboard.readText) {
            navigator.clipboard.readText().then(text => {
                if (macSidebarInput && text.trim()) {
                    macSidebarInput.value = text;
                    macSidebarInput.focus();
                    
                    // Move to step 3 after successful paste
                    setTimeout(() => {
                        currentTutorialStep = 3;
                        showTutorialStep(3);
                    }, 500);
                }
            }).catch(() => {
                // Fallback: use the stored text from the copy operation
                if (macSidebarInput && optimizedPromptText) {
                    macSidebarInput.value = optimizedPromptText;
                    macSidebarInput.focus();
                    
                    setTimeout(() => {
                        currentTutorialStep = 3;
                        showTutorialStep(3);
                    }, 500);
                }
            });
        } else {
            // Fallback for browsers without clipboard API
            if (macSidebarInput && optimizedPromptText) {
                macSidebarInput.value = optimizedPromptText;
                macSidebarInput.focus();
                
                setTimeout(() => {
                    currentTutorialStep = 3;
                    showTutorialStep(3);
                }, 500);
            }
        }
    }

    function checkPasteInPromptMaster() {
        // This function now serves as a backup for manual pasting
        if (!tutorialActive || currentTutorialStep !== 2) return;
        
        // Check if text was pasted into Prompt Master
        if (macSidebarInput && macSidebarInput.value.trim().length > 0) {
            // Move to step 3
            setTimeout(() => {
                currentTutorialStep = 3;
                showTutorialStep(3);
            }, 500);
        }
    }

    function handlePromptMasterGenerate() {
        if (!tutorialActive || currentTutorialStep !== 3) return;
        
        // Show loading state first
        const responseArea = document.getElementById('prompt-response');
        if (responseArea) {
            responseArea.style.display = 'block';
            responseArea.style.opacity = '0';
            responseArea.style.transform = 'translateY(10px)';
            
            // Show a loading indicator
            responseArea.innerHTML = `
                <div class="response-content" style="text-align: center; padding: 40px;">
                    <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: #007AFF; animation: spin 1s ease-in-out infinite;"></div>
                    <p style="margin-top: 16px; color: rgba(255,255,255,0.8);">Optimizing your prompt...</p>
                </div>
            `;
            
            setTimeout(() => {
                responseArea.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                responseArea.style.opacity = '1';
                responseArea.style.transform = 'translateY(0)';
                
                // After loading, show the optimized prompt
                setTimeout(() => {
                    responseArea.innerHTML = `
                        <div class="response-content">
                            <p><strong>Act as a 10x Mobile App Developer</strong> with expertise in iOS and Android development, user experience design, backend architecture, and social media platform engineering.</p>
                            
                            <p><strong>• Analyze</strong> the core features of Facebook (user profiles, news feed, messaging, groups, events, photos, video, privacy settings).<br>
                            <strong>• Define</strong> target audience and market positioning.<br>
                            <strong>• Outline</strong> technical stack: frontend (Swift/Java/Kotlin), backend (Node.js, Firebase, or custom server), database (MongoDB, Firebase Realtime Database).<br>
                            <strong>• Design</strong> user flow and wireframes for key screens (login, profile, news feed, messaging, groups).<br>
                            <strong>• Plan</strong> security measures: authentication, data encryption, privacy controls.<br>
                            <strong>• Estimate</strong> development timeline and resource requirements.<br>
                            <strong>• Identify</strong> potential challenges and solutions (e.g., scalability, user engagement, compliance with app store guidelines).</p>
                            
                            <p><strong>GOAL:</strong> Create a fully functional mobile social media application similar to Facebook, complete with core features, user interface design, technical architecture, and development plan.</p>
                        </div>
                    `;
                    
                    // Move to step 4 (copy optimized prompt)
                    setTimeout(() => {
                        currentTutorialStep = 4;
                        showTutorialStep(4);
                    }, 1000);
                }, 2000); // Show loading for 2 seconds
            }, 50);
        }
    }

    function handleCopyOptimizedPrompt() {
        if (!tutorialActive || currentTutorialStep !== 4) return;
        
        // Get the optimized prompt text
        const responseArea = document.getElementById('prompt-response');
        const optimizedText = responseArea?.textContent || '';
        
        if (optimizedText) {
            navigator.clipboard.writeText(optimizedText).then(() => {
                // Move to step 5
                setTimeout(() => {
                    currentTutorialStep = 5;
                    showTutorialStep(5);
                }, 500);
            }).catch(() => {
                // Fallback
                currentTutorialStep = 5;
                showTutorialStep(5);
            });
        }
    }

    function handlePasteToChatGPT() {
        if (!tutorialActive || currentTutorialStep !== 5) return;
        
        // Try to read from clipboard and paste into ChatGPT input
        if (navigator.clipboard && navigator.clipboard.readText) {
            navigator.clipboard.readText().then(text => {
                if (chatInput && text.trim()) {
                    // Temporarily enable input for pasting
                    chatInput.removeAttribute('readonly');
                    chatInput.classList.remove('tutorial-disabled');
                    
                    // Format the text nicely - clean up extra spaces and line breaks
                    const formattedText = text
                        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
                        .replace(/\n\s*\n/g, '\n\n') // Clean up multiple line breaks
                        .replace(/\.\s+/g, '. ') // Ensure single space after periods
                        .replace(/\•\s*/g, '• ') // Clean up bullet points
                        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove markdown bold formatting
                        .trim();
                    
                    chatInput.value = formattedText;
                    chatInput.focus();
                    
                    // Auto-resize the textarea
                    if (window.demoFunctions?.autoResizeChatInput) {
                        window.demoFunctions.autoResizeChatInput();
                    }
                    
                    // Re-disable the input after pasting
                    setTimeout(() => {
                        chatInput.setAttribute('readonly', 'true');
                        chatInput.classList.add('tutorial-disabled');
                        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
                        if (chatInputWrapper) {
                            chatInputWrapper.classList.add('tutorial-disabled');
                        }
                        
                        currentTutorialStep = 6;
                        showTutorialStep(6);
                    }, 500);
                }
            }).catch(() => {
                // Fallback: use a sample optimized prompt
                if (chatInput) {
                    chatInput.removeAttribute('readonly');
                    chatInput.classList.remove('tutorial-disabled');
                    
                    const fallbackText = "Act as a 10x Mobile App Developer with expertise in iOS and Android development, user experience design, backend architecture, and social media platform engineering. Create a fully functional mobile social media application similar to Facebook, complete with core features, user interface design, technical architecture, and development plan.";
                    chatInput.value = fallbackText;
                    chatInput.focus();
                    
                    if (window.demoFunctions?.autoResizeChatInput) {
                        window.demoFunctions.autoResizeChatInput();
                    }
                    
                    setTimeout(() => {
                        chatInput.setAttribute('readonly', 'true');
                        chatInput.classList.add('tutorial-disabled');
                        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
                        if (chatInputWrapper) {
                            chatInputWrapper.classList.add('tutorial-disabled');
                        }
                        
                        currentTutorialStep = 6;
                        showTutorialStep(6);
                    }, 500);
                }
            });
        } else {
            // Fallback for browsers without clipboard API
            if (chatInput) {
                chatInput.removeAttribute('readonly');
                chatInput.classList.remove('tutorial-disabled');
                
                const fallbackText = "Act as a 10x Mobile App Developer with expertise in iOS and Android development, user experience design, backend architecture, and social media platform engineering. Create a fully functional mobile social media application similar to Facebook, complete with core features, user interface design, technical architecture, and development plan.";
                chatInput.value = fallbackText;
                chatInput.focus();
                
                if (window.demoFunctions?.autoResizeChatInput) {
                    window.demoFunctions.autoResizeChatInput();
                }
                
                setTimeout(() => {
                    chatInput.setAttribute('readonly', 'true');
                    chatInput.classList.add('tutorial-disabled');
                    const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
                    if (chatInputWrapper) {
                        chatInputWrapper.classList.add('tutorial-disabled');
                    }
                    
                    currentTutorialStep = 6;
                    showTutorialStep(6);
                }, 500);
            }
        }
    }

    function handleChatGPTSend() {
        if (!tutorialActive || currentTutorialStep !== 6) return;
        
        // Simulate sending the message and show SwiftUI code response
        if (!chatInput || !chatMessages) return;
        
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-content">
                <p>${message.length > 200 ? message.substring(0, 200) + '...' : message}</p>
            </div>
        `;
        chatMessages.appendChild(userMessage);

        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Show SwiftUI code response after a delay
        setTimeout(() => {
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
                    <p><strong>Perfect! Here's your SwiftUI social media app structure:</strong></p>
                    <pre style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; overflow-x: auto; font-family: 'SF Mono', Monaco, monospace; font-size: 13px; line-height: 1.4; color: #e1e1e1;">
import SwiftUI

struct ContentView: View {
    @State private var posts: [Post] = []
    @State private var showingProfile = false
    
    var body: some View {
        NavigationView {
            VStack {
                // Header
                HStack {
                    Text("SocialApp")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    Spacer()
                    Button(action: { showingProfile = true }) {
                        Image(systemName: "person.circle")
                            .font(.title2)
                    }
                }
                .padding()
                
                // Feed
                ScrollView {
                    LazyVStack(spacing: 16) {
                        ForEach(posts) { post in
                            PostView(post: post)
                        }
                    }
                    .padding()
                }
            }
        }
        .onAppear {
            loadPosts()
        }
    }
}

struct PostView: View {
    let post: Post
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                AsyncImage(url: post.userAvatar) { image in
                    image.resizable()
                } placeholder: {
                    Circle().fill(Color.gray)
                }
                .frame(width: 40, height: 40)
                .clipShape(Circle())
                
                VStack(alignment: .leading) {
                    Text(post.username)
                        .fontWeight(.semibold)
                    Text(post.timestamp)
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                Spacer()
            }
            
            Text(post.content)
                .multilineTextAlignment(.leading)
            
            if let imageURL = post.imageURL {
                AsyncImage(url: imageURL) { image in
                    image.resizable()
                        .aspectRatio(contentMode: .fit)
                } placeholder: {
                    Rectangle().fill(Color.gray.opacity(0.3))
                }
                .frame(maxHeight: 300)
                .cornerRadius(12)
            }
            
            HStack(spacing: 24) {
                Button(action: {}) {
                    Label("Like", systemImage: "heart")
                }
                Button(action: {}) {
                    Label("Comment", systemImage: "message")
                }
                Button(action: {}) {
                    Label("Share", systemImage: "square.and.arrow.up")
                }
                Spacer()
            }
            .font(.caption)
            .foregroundColor(.secondary)
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(12)
        .shadow(radius: 2)
    }
}</pre>
                    <p>This creates a beautiful, native iOS social media interface with posts, user profiles, and interactive elements. The code includes proper SwiftUI architecture, async image loading, and modern iOS design patterns!</p>
                </div>
            `;
            chatMessages.appendChild(aiMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Show Perfect alert after a short delay to let user see the code
            setTimeout(() => {
                showPerfectAlert();
            }, 2000);
        }, 1000);
    }

    function showPerfectAlert() {
        if (perfectAlertOverlay) {
            perfectAlertOverlay.style.display = 'flex';
            setTimeout(() => {
                perfectAlertOverlay.classList.add('show');
            }, 50);
        }
    }

    // Global function for the button onclick
    window.closePerfectAlert = function() {
        if (perfectAlertOverlay) {
            perfectAlertOverlay.classList.remove('show');
            setTimeout(() => {
                perfectAlertOverlay.style.display = 'none';
                // Move to final step
                currentTutorialStep = 7;
                showTutorialStep(7);
            }, 500);
        }
    };

    function endTutorial() {
        tutorialActive = false;
        currentTutorialStep = 0;
        tutorialOverlay.style.display = 'none';
        
        // Remove all tutorial effects
        removeAllTutorialEffects();
        
        // Remove text selection
        document.querySelectorAll('.text-selected').forEach(el => {
            el.classList.remove('text-selected');
        });
    }

    function restartTutorial() {
        endTutorial();
        
        // Reset states
        if (chatInput) {
            chatInput.value = 'create mobile app like facebook';
            chatInput.removeAttribute('readonly');
            chatInput.classList.remove('tutorial-disabled');
        }
        
        // Reset ChatGPT input wrapper
        const chatInputWrapper = chatgptBrowser?.querySelector('.chat-input-wrapper');
        if (chatInputWrapper) {
            chatInputWrapper.classList.remove('tutorial-disabled');
        }
        
        if (macSidebarInput) {
            macSidebarInput.value = '';
            macSidebarInput.classList.remove('tutorial-disabled');
            macSidebarInput.removeAttribute('readonly');
        }
        
        // Reset Prompt Master input container
        const sidebarInputContainer = macAppWindow?.querySelector('.sidebar-input-container');
        if (sidebarInputContainer) {
            sidebarInputContainer.classList.remove('tutorial-active');
        }
        
        // Hide perfect alert overlay
        if (perfectAlertOverlay) {
            perfectAlertOverlay.style.display = 'none';
            perfectAlertOverlay.classList.remove('show');
        }
        
        // Clear chat messages
        if (chatMessages) {
            chatMessages.innerHTML = '';
        }
        
        // Hide response area and reset its content
        const responseArea = document.getElementById('prompt-response');
        if (responseArea) {
            responseArea.style.display = 'none';
            responseArea.innerHTML = `
                <div class="response-content">
                    <p><strong>Act as a 10x Mobile App Developer</strong> with expertise in iOS and Android development, user experience design, backend architecture, and social media platform engineering.</p>
                    
                    <p><strong>• Analyze</strong> the core features of Facebook (user profiles, news feed, messaging, groups, events, photos, video, privacy settings).<br>
                    <strong>• Define</strong> target audience and market positioning.<br>
                    <strong>• Outline</strong> technical stack: frontend (Swift/Java/Kotlin), backend (Node.js, Firebase, or custom server), database (MongoDB, Firebase Realtime Database).<br>
                    <strong>• Design</strong> user flow and wireframes for key screens (login, profile, news feed, messaging, groups).<br>
                    <strong>• Plan</strong> security measures: authentication, data encryption, privacy controls.<br>
                    <strong>• Estimate</strong> development timeline and resource requirements.<br>
                    <strong>• Identify</strong> potential challenges and solutions (e.g., scalability, user engagement, compliance with app store guidelines).</p>
                    
                    <p><strong>GOAL:</strong> Create a fully functional mobile social media application similar to Facebook, complete with core features, user interface design, technical architecture, and development plan.</p>
                </div>
            `;
        }
        
        // Start tutorial again
        setTimeout(() => {
            startTutorial();
        }, 500);
    }

    // Tutorial Event Listeners
    if (restartButton) {
        restartButton.addEventListener('click', restartTutorial);
    }

    if (copyButton) {
        copyButton.addEventListener('click', handleCopyButtonClick);
    }

    if (pasteButton) {
        pasteButton.addEventListener('click', handlePasteButtonClick);
    }

    if (copyOptimizedButton) {
        copyOptimizedButton.addEventListener('click', handleCopyOptimizedPrompt);
    }

    if (pasteToChatGPTButton) {
        pasteToChatGPTButton.addEventListener('click', handlePasteToChatGPT);
    }

    // Export tutorial functions and state to global scope
    window.tutorialFunctions = {
        startTutorial,
        showTutorialStep,
        applyTutorialEffects,
        removeAllTutorialEffects,
        endTutorial,
        restartTutorial,
        handlePromptMasterGenerate,
        handleChatGPTSend,
        checkPasteInPromptMaster,
        // State getters
        get tutorialActive() { return tutorialActive; },
        get currentTutorialStep() { return currentTutorialStep; }
    };

    // Start tutorial automatically after a short delay
    setTimeout(() => {
        startTutorial();
    }, 1000);
}); 