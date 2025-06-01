// Translations object with all supported languages
const translations = {
    // English
    en: {
        "headline": "Beyond the Prompt",
        "subtitle": "For builders, researchers, and creators shaping how LLMs respond to their needs.<br>Precision. Control. Results.",
        "name-label": "Name",
        "name-placeholder": "Jane Smith",
        "email-label": "Email",
        "email-placeholder": "jane@example.com",
        "copyright": "© 2025 Prompt Master. All Rights reserved.",
        "app-name-header": "Prompt Master",
        "app-name-footer": "Prompt Master",
        "demo-app-name": "Prompt Master",
        "demo-menu-file": "File",
        "demo-menu-edit": "Edit",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volume",
        "demo-icon-title-control-center": "Control Center",
        "demo-macos-notif-title": "Discover Advanced Features!",
        "demo-macos-notif-message": "Try the Optimization panel for powerful prompt tuning.",
        "aria-close-notification": "Close notification",
        "demo-desktop-icon-notes": "Prompts.txt",
        "demo-desktop-icon-ideas": "Templates.txt",
        "demo-desktop-icon-project-files": "AI Projects",
        "demo-window-title-lgcontrol": "Prompt Master",
        "demo-remote-status-connected": "Connected to GPT-4 Turbo",
        "demo-remote-btn-menu": "GENERATE",
        "demo-remote-label-vol": "TEMP",
        "demo-remote-label-ch": "TOKENS",
        "demo-settings-title-display": "Model Settings",
        "demo-settings-label-brightness": "Temperature",
        "demo-settings-label-contrast": "Top P",
        "demo-settings-label-colortemp": "Frequency Penalty",
        "demo-settings-label-peakbrightness": "Max Tokens",
        "option-off": "Off",
        "option-low": "Low",
        "option-medium": "Medium",
        "option-high": "High",
        "demo-settings-label-videorange": "Response Format",
        "option-limited": "Limited",
        "option-full": "Full",
        "demo-premium-title-features": "Advanced Optimization",
        "demo-premium-label-disable-tpc": "Chain of Thought",
        "demo-premium-label-disable-gsr": "Few-Shot Learning",
        "demo-premium-label-servicemenu": "Prompt Library",
        "demo-premium-btn-access": "Browse",
        "demo-premium-label-motionpro": "Auto-Optimization",
        "demo-nav-remote": "Prompt",
        "demo-nav-settings": "Model",
        "demo-nav-premium": "Optimize ✨",
        "demo-mac-connecting-text": "Connecting to AI Model...",
        "demo-prompt-input-title": "Prompt Input",
        "demo-prompt-output-title": "AI Response",
        "demo-btn-clear": "Clear",
        "demo-btn-generate": "Generate",
        "demo-btn-copy": "Copy",
        "demo-btn-save": "Save",
        "demo-prompt-placeholder": "Enter your prompt to optimize...",
        "promo-main-title": "AI Prompt Engineering. Perfected.",
        "promo-sub-text": "Experience the future of prompt optimization with our intuitive macOS interface.<br>Precision engineering for professional AI workflows.",
        "demo-ios-notif-title": "Discover Advanced Features!",
        "demo-ios-notif-message": "Try the Optimization panel for powerful prompt tuning.",
        "phone-remote-vol-up": "Temp+",
        "phone-remote-vol-down": "Temp-",
        "phone-remote-ch-up": "Token+",
        "phone-remote-ch-down": "Token-",
        "phone-remote-ok": "Generate",
        "phone-remote-home": "Reset",
        "phone-remote-back": "Undo",
        "phone-remote-input": "Save",
        "phone-settings-title-display": "Model",
        "phone-settings-label-brightness": "Temperature",
        "phone-settings-label-contrast": "Top P",
        "phone-settings-label-colortemp": "Frequency Penalty",
        "phone-settings-title-advanced": "Advanced",
        "phone-settings-label-peakbrightness": "Max Tokens",
        "phone-settings-label-videorange": "Response Format",
        "phone-premium-title-features": "Advanced Optimization",
        "phone-premium-label-disable-tpc": "Chain of Thought",
        "phone-premium-label-disable-gsr": "Few-Shot Learning",
        "phone-premium-label-motionpro": "Auto-Optimization",
        "phone-premium-label-servicemenu": "Prompt Library",
        "phone-premium-btn-access": "Browse",
        "phone-nav-remote": "<span class=\"nav-icon\">🤖</span>Prompt",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Model",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Optimize",
        "phone-connecting-text": "Connecting...",
        "form-title-beta-access": "Early Beta Access",
        "form-title-beta-membership": "Early Beta Membership",
        "form-subtitle-beta-info": "Join our waitlist to be among the first to try Prompt Master in beta.<br>Submit your email and we'll notify you when the beta is live!",
        "form-label-user-opinion": "What challenges do you face with prompt engineering? What features would you expect? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Optional)</span>",
        "form-placeholder-user-opinion": "Share your thoughts, needs, or frustrations...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "Join",
        "mobile-header-title": "Join us"
    },
    // Spanish
    es: {
        "headline": "Más Allá del Prompt",
        "subtitle": "Para desarrolladores, investigadores y creadores que moldean cómo los LLMs responden a sus necesidades.<br>Precisión. Control. Resultados.",
        "name-label": "Nombre",
        "name-placeholder": "María García",
        "email-label": "Correo electrónico",
        "email-placeholder": "maria@ejemplo.com",
        "copyright": "© 2025 Prompt Master. Todos los derechos reservados.",
        "app-name-header": "Prompt Master",
        "app-name-footer": "Prompt Master",
        "demo-app-name": "Prompt Master",
        "demo-menu-file": "Archivo",
        "demo-menu-edit": "Editar",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volumen",
        "demo-icon-title-control-center": "Centro de Control",
        "demo-macos-notif-title": "¡Descubre Funciones Avanzadas!",
        "demo-macos-notif-message": "Prueba el panel de Optimización para ajuste avanzado de prompts.",
        "aria-close-notification": "Cerrar notificación",
        "demo-desktop-icon-notes": "Prompts.txt",
        "demo-desktop-icon-ideas": "Plantillas.txt",
        "demo-desktop-icon-project-files": "Proyectos IA",
        "demo-window-title-lgcontrol": "Prompt Master",
        "demo-remote-status-connected": "Conectado a GPT-4 Turbo",
        "demo-remote-btn-menu": "GENERAR",
        "demo-remote-label-vol": "TEMP",
        "demo-remote-label-ch": "TOKENS",
        "demo-settings-title-display": "Configuración del Modelo",
        "demo-settings-label-brightness": "Temperatura",
        "demo-settings-label-contrast": "Top P",
        "demo-settings-label-colortemp": "Penalización de Frecuencia",
        "demo-settings-label-peakbrightness": "Máx Tokens",
        "option-off": "Apagado",
        "option-low": "Bajo",
        "option-medium": "Medio",
        "option-high": "Alto",
        "demo-settings-label-videorange": "Formato de Respuesta",
        "option-limited": "Limitado",
        "option-full": "Completo",
        "demo-premium-title-features": "Optimización Avanzada",
        "demo-premium-label-disable-tpc": "Cadena de Pensamiento",
        "demo-premium-label-disable-gsr": "Aprendizaje Few-Shot",
        "demo-premium-label-servicemenu": "Biblioteca de Prompts",
        "demo-premium-btn-access": "Explorar",
        "demo-premium-label-motionpro": "Auto-Optimización",
        "demo-nav-remote": "Prompt",
        "demo-nav-settings": "Modelo",
        "demo-nav-premium": "Optimizar ✨",
        "demo-mac-connecting-text": "Conectando al Modelo IA...",
        "promo-main-title": "Ingeniería de Prompts IA. En Todas Partes.",
        "promo-sub-text": "Experimenta optimización unificada de prompts en todo tu flujo de trabajo<br>MacBook, iPad, iPhone y Android.",
        "demo-ios-notif-title": "¡Descubre Funciones Avanzadas!",
        "demo-ios-notif-message": "Prueba el panel de Optimización para ajuste avanzado de prompts.",
        "phone-remote-vol-up": "Temp+",
        "phone-remote-vol-down": "Temp-",
        "phone-remote-ch-up": "Token+",
        "phone-remote-ch-down": "Token-",
        "phone-remote-ok": "Generar",
        "phone-remote-home": "Reiniciar",
        "phone-remote-back": "Deshacer",
        "phone-remote-input": "Guardar",
        "phone-settings-title-display": "Modelo",
        "phone-settings-label-brightness": "Temperatura",
        "phone-settings-label-contrast": "Top P",
        "phone-settings-label-colortemp": "Penalización de Frecuencia",
        "phone-settings-title-advanced": "Avanzado",
        "phone-settings-label-peakbrightness": "Máx Tokens",
        "phone-settings-label-videorange": "Formato de Respuesta",
        "phone-premium-title-features": "Optimización Avanzada",
        "phone-premium-label-disable-tpc": "Cadena de Pensamiento",
        "phone-premium-label-disable-gsr": "Aprendizaje Few-Shot",
        "phone-premium-label-motionpro": "Auto-Optimización",
        "phone-premium-label-servicemenu": "Biblioteca de Prompts",
        "phone-premium-btn-access": "Explorar",
        "phone-nav-remote": "<span class=\"nav-icon\">🤖</span>Prompt",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Modelo",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Optimizar",
        "phone-connecting-text": "Conectando...",
        "form-title-beta-access": "Acceso Beta Anticipado",
        "form-title-beta-membership": "Acceso Beta Anticipado",
        "form-subtitle-beta-info": "Únete a nuestra lista de espera para ser de los primeros en probar Prompt Master en beta.<br>¡Envía tu correo y te notificaremos cuando la beta esté disponible!",
        "form-label-user-opinion": "¿Qué desafíos enfrentas con la ingeniería de prompts? ¿Qué características esperarías? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Opcional)</span>",
        "form-placeholder-user-opinion": "Comparte tus pensamientos, necesidades o frustraciones...",
        "join-waitlist": "Unirse a Lista de Espera",
        "get-early-access": "Obtener Acceso Anticipado",
        "join": "Unirse",
        "mobile-header-title": "Únete"
    },
    // Chinese
    zh: {
        "headline": "超越提示词",
        "subtitle": "为构建者、研究者和创作者塑造LLM如何响应他们的需求。<br>精确。控制。结果。",
        "name-label": "姓名",
        "name-placeholder": "张伟",
        "email-label": "电子邮件",
        "email-placeholder": "zhang@example.com",
        "copyright": "© 2025 Prompt Master. 保留所有权利。",
        "app-name-header": "Prompt Master",
        "app-name-footer": "Prompt Master",
        "demo-app-name": "Prompt Master",
        "demo-menu-file": "文件",
        "demo-menu-edit": "编辑",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "音量",
        "demo-icon-title-control-center": "控制中心",
        "demo-macos-notif-title": "发现高级功能！",
        "demo-macos-notif-message": "尝试优化面板进行强大的提示词调优。",
        "aria-close-notification": "关闭通知",
        "demo-desktop-icon-notes": "提示词.txt",
        "demo-desktop-icon-ideas": "模板.txt",
        "demo-desktop-icon-project-files": "AI项目",
        "demo-window-title-lgcontrol": "Prompt Master",
        "demo-remote-status-connected": "已连接到 GPT-4 Turbo",
        "demo-remote-btn-menu": "生成",
        "demo-remote-label-vol": "温度",
        "demo-remote-label-ch": "令牌",
        "demo-settings-title-display": "模型设置",
        "demo-settings-label-brightness": "温度",
        "demo-settings-label-contrast": "Top P",
        "demo-settings-label-colortemp": "频率惩罚",
        "demo-settings-label-peakbrightness": "最大令牌",
        "option-off": "关",
        "option-low": "低",
        "option-medium": "中",
        "option-high": "高",
        "demo-settings-label-videorange": "响应格式",
        "option-limited": "有限",
        "option-full": "全",
        "demo-premium-title-features": "高级优化",
        "demo-premium-label-disable-tpc": "思维链",
        "demo-premium-label-disable-gsr": "少样本学习",
        "demo-premium-label-servicemenu": "提示词库",
        "demo-premium-btn-access": "浏览",
        "demo-premium-label-motionpro": "自动优化",
        "demo-nav-remote": "提示词",
        "demo-nav-settings": "模型",
        "demo-nav-premium": "优化 ✨",
        "demo-mac-connecting-text": "正在连接到AI模型...",
        "promo-main-title": "AI提示词工程。无处不在。",
        "promo-sub-text": "在您的整个工作流程中体验统一的提示词优化<br>MacBook、iPad、iPhone 和 Android。",
        "demo-ios-notif-title": "发现高级功能！",
        "demo-ios-notif-message": "尝试优化面板进行强大的提示词调优。",
        "phone-remote-vol-up": "温度+",
        "phone-remote-vol-down": "温度-",
        "phone-remote-ch-up": "令牌+",
        "phone-remote-ch-down": "令牌-",
        "phone-remote-ok": "生成",
        "phone-remote-home": "重置",
        "phone-remote-back": "撤销",
        "phone-remote-input": "保存",
        "phone-settings-title-display": "模型",
        "phone-settings-label-brightness": "温度",
        "phone-settings-label-contrast": "Top P",
        "phone-settings-label-colortemp": "频率惩罚",
        "phone-settings-title-advanced": "高级",
        "phone-settings-label-peakbrightness": "最大令牌",
        "phone-settings-label-videorange": "响应格式",
        "phone-premium-title-features": "高级优化",
        "phone-premium-label-disable-tpc": "思维链",
        "phone-premium-label-disable-gsr": "少样本学习",
        "phone-premium-label-motionpro": "自动优化",
        "phone-premium-label-servicemenu": "提示词库",
        "phone-premium-btn-access": "浏览",
        "phone-nav-remote": "<span class=\"nav-icon\">🤖</span>提示词",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>模型",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>优化",
        "phone-connecting-text": "连接中...",
        "form-title-beta-access": "早期测试版访问",
        "form-title-beta-membership": "早期测试版访问",
        "form-subtitle-beta-info": "加入我们的等候名单，成为第一批试用 Prompt Master 测试版的用户。<br>提交您的电子邮件，我们会在测试版上线时通知您！",
        "form-label-user-opinion": "您在提示词工程方面面临哪些挑战？您期望什么功能？<span style=\"color:var(--text-tertiary); font-weight:400;\">(可选)</span>",
        "form-placeholder-user-opinion": "分享您的想法、需求或困扰...",
        "join-waitlist": "加入等候名单",
        "get-early-access": "获得早期访问",
        "join": "加入",
        "mobile-header-title": "加入我们"
    },
    // Hindi
    hi: {
        "headline": "प्रॉम्प्ट से परे",
        "subtitle": "बिल्डर्स, रिसर्चर्स और क्रिएटर्स के लिए जो LLMs को अपनी जरूरतों के अनुसार आकार देते हैं।<br>सटीकता। नियंत्रण। परिणाम।",
        "name-label": "नाम",
        "name-placeholder": "अमित शर्मा",
        "email-label": "ईमेल",
        "email-placeholder": "amit@example.com",
        "copyright": "© 2025 Prompt Master. सर्वाधिकार सुरक्षित।",
        "app-name-header": "Prompt Master",
        "app-name-footer": "Prompt Master",
        "demo-app-name": "Prompt Master",
        "demo-menu-file": "फ़ाइल",
        "demo-menu-edit": "संपादित करें",
        "demo-icon-title-wifi": "वाई-फाई",
        "demo-icon-title-volume": "वॉल्यूम",
        "demo-icon-title-control-center": "नियंत्रण केंद्र",
        "demo-macos-notif-title": "उन्नत सुविधाएं खोजें!",
        "demo-macos-notif-message": "शक्तिशाली प्रॉम्प्ट ट्यूनिंग के लिए ऑप्टिमाइज़ेशन पैनल आज़माएं।",
        "aria-close-notification": "सूचना बंद करें",
        "demo-desktop-icon-notes": "प्रॉम्प्ट्स.txt",
        "demo-desktop-icon-ideas": "टेम्प्लेट्स.txt",
        "demo-desktop-icon-project-files": "AI प्रोजेक्ट्स",
        "demo-window-title-lgcontrol": "Prompt Master",
        "demo-remote-status-connected": "GPT-4 Turbo से जुड़ा है",
        "demo-remote-btn-menu": "जेनरेट",
        "demo-remote-label-vol": "टेम्प",
        "demo-remote-label-ch": "टोकन्स",
        "demo-settings-title-display": "मॉडल सेटिंग्स",
        "demo-settings-label-brightness": "टेम्परेचर",
        "demo-settings-label-contrast": "Top P",
        "demo-settings-label-colortemp": "फ्रीक्वेंसी पेनल्टी",
        "demo-settings-label-peakbrightness": "मैक्स टोकन्स",
        "option-off": "बंद",
        "option-low": "कम",
        "option-medium": "मध्यम",
        "option-high": "उच्च",
        "demo-settings-label-videorange": "रिस्पॉन्स फॉर्मेट",
        "option-limited": "सीमित",
        "option-full": "पूर्ण",
        "demo-premium-title-features": "उन्नत ऑप्टिमाइज़ेशन",
        "demo-premium-label-disable-tpc": "चेन ऑफ थॉट",
        "demo-premium-label-disable-gsr": "फ्यू-शॉट लर्निंग",
        "demo-premium-label-servicemenu": "प्रॉम्प्ट लाइब्रेरी",
        "demo-premium-btn-access": "ब्राउज़",
        "demo-premium-label-motionpro": "ऑटो-ऑप्टिमाइज़ेशन",
        "demo-nav-remote": "प्रॉम्प्ट",
        "demo-nav-settings": "मॉडल",
        "demo-nav-premium": "ऑप्टिमाइज़ ✨",
        "demo-mac-connecting-text": "AI मॉडल से कनेक्ट हो रहा है...",
        "promo-main-title": "AI प्रॉम्प्ट इंजीनियरिंग। हर जगह।",
        "promo-sub-text": "अपने पूरे वर्कफ़्लो में एकीकृत प्रॉम्प्ट ऑप्टिमाइज़ेशन का अनुभव करें<br>MacBook, iPad, iPhone और Android।",
        "demo-ios-notif-title": "उन्नत सुविधाएं खोजें!",
        "demo-ios-notif-message": "शक्तिशाली प्रॉम्प्ट ट्यूनिंग के लिए ऑप्टिमाइज़ेशन पैनल आज़माएं।",
        "phone-remote-vol-up": "टेम्प+",
        "phone-remote-vol-down": "टेम्प-",
        "phone-remote-ch-up": "टोकन+",
        "phone-remote-ch-down": "टोकन-",
        "phone-remote-ok": "जेनरेट",
        "phone-remote-home": "रीसेट",
        "phone-remote-back": "अंडू",
        "phone-remote-input": "सेव",
        "phone-settings-title-display": "मॉडल",
        "phone-settings-label-brightness": "टेम्परेचर",
        "phone-settings-label-contrast": "Top P",
        "phone-settings-label-colortemp": "फ्रीक्वेंसी पेनल्टी",
        "phone-settings-title-advanced": "उन्नत",
        "phone-settings-label-peakbrightness": "मैक्स टोकन्स",
        "phone-settings-label-videorange": "रिस्पॉन्स फॉर्मेट",
        "phone-premium-title-features": "उन्नत ऑप्टिमाइज़ेशन",
        "phone-premium-label-disable-tpc": "चेन ऑफ थॉट",
        "phone-premium-label-disable-gsr": "फ्यू-शॉट लर्निंग",
        "phone-premium-label-motionpro": "ऑटो-ऑप्टिमाइज़ेशन",
        "phone-premium-label-servicemenu": "प्रॉम्प्ट लाइब्रेरी",
        "phone-premium-btn-access": "ब्राउज़",
        "phone-nav-remote": "<span class=\"nav-icon\">🤖</span>प्रॉम्प्ट",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>मॉडल",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>ऑप्टिमाइज़",
        "phone-connecting-text": "कनेक्ट हो रहा है...",
        "form-title-beta-access": "प्रारंभिक बीटा एक्सेस",
        "form-title-beta-membership": "प्रारंभिक बीटा एक्सेस",
        "form-subtitle-beta-info": "Prompt Master बीटा को आज़माने वाले पहले लोगों में शामिल होने के लिए हमारी प्रतीक्षा सूची में शामिल हों।<br>अपना ईमेल सबमिट करें और बीटा लाइव होने पर हम आपको सूचित करेंगे!",
        "form-label-user-opinion": "प्रॉम्प्ट इंजीनियरिंग में आपको कौन सी चुनौतियों का सामना करना पड़ता है? आप कौन सी सुविधाओं की अपेक्षा करते हैं? <span style=\"color:var(--text-tertiary); font-weight:400;\">(ऐच्छिक)</span>",
        "form-placeholder-user-opinion": "अपने विचार, जरूरतें या परेशानियां साझा करें...",
        "join-waitlist": "प्रतीक्षा सूची में शामिल हों",
        "get-early-access": "प्रारंभिक पहुंच प्राप्त करें",
        "join": "जुड़ें",
        "mobile-header-title": "हमसे जुड़ें"
    },
    // Arabic
    ar: {
        "headline": "ما وراء الموجه",
        "subtitle": "للمطورين والباحثين والمبدعين الذين يشكلون كيفية استجابة نماذج اللغة الكبيرة لاحتياجاتهم.<br>دقة. تحكم. نتائج.",
        "name-label": "الاسم",
        "name-placeholder": "محمد أحمد",
        "email-label": "البريد الإلكتروني",
        "email-placeholder": "mohamed@example.com",
        "copyright": "© 2025 Prompt Master. جميع الحقوق محفوظة.",
        "app-name-header": "Prompt Master",
        "app-name-footer": "Prompt Master",
        "demo-app-name": "Prompt Master",
        "demo-menu-file": "ملف",
        "demo-menu-edit": "تعديل",
        "demo-icon-title-wifi": "واي فاي",
        "demo-icon-title-volume": "الصوت",
        "demo-icon-title-control-center": "مركز التحكم",
        "demo-macos-notif-title": "اكتشف الميزات المتقدمة!",
        "demo-macos-notif-message": "جرب لوحة التحسين لضبط الموجهات القوية.",
        "aria-close-notification": "إغلاق الإشعار",
        "demo-desktop-icon-notes": "موجهات.txt",
        "demo-desktop-icon-ideas": "قوالب.txt",
        "demo-desktop-icon-project-files": "مشاريع الذكاء الاصطناعي",
        "demo-window-title-lgcontrol": "Prompt Master",
        "demo-remote-status-connected": "متصل بـ GPT-4 Turbo",
        "demo-remote-btn-menu": "توليد",
        "demo-remote-label-vol": "درجة الحرارة",
        "demo-remote-label-ch": "الرموز",
        "demo-settings-title-display": "إعدادات النموذج",
        "demo-settings-label-brightness": "درجة الحرارة",
        "demo-settings-label-contrast": "Top P",
        "demo-settings-label-colortemp": "عقوبة التكرار",
        "demo-settings-label-peakbrightness": "أقصى رموز",
        "option-off": "إيقاف",
        "option-low": "منخفض",
        "option-medium": "متوسط",
        "option-high": "مرتفع",
        "demo-settings-label-videorange": "تنسيق الاستجابة",
        "option-limited": "محدود",
        "option-full": "كامل",
        "demo-premium-title-features": "التحسين المتقدم",
        "demo-premium-label-disable-tpc": "سلسلة الفكر",
        "demo-premium-label-disable-gsr": "التعلم قليل الأمثلة",
        "demo-premium-label-servicemenu": "مكتبة الموجهات",
        "demo-premium-btn-access": "تصفح",
        "demo-premium-label-motionpro": "التحسين التلقائي",
        "demo-nav-remote": "موجه",
        "demo-nav-settings": "نموذج",
        "demo-nav-premium": "تحسين ✨",
        "demo-mac-connecting-text": "الاتصال بنموذج الذكاء الاصطناعي...",
        "promo-main-title": "هندسة موجهات الذكاء الاصطناعي. في كل مكان.",
        "promo-sub-text": "اختبر تحسين الموجهات الموحد عبر سير عملك بالكامل<br>MacBook و iPad و iPhone و Android.",
        "demo-ios-notif-title": "اكتشف الميزات المتقدمة!",
        "demo-ios-notif-message": "جرب لوحة التحسين لضبط الموجهات القوية.",
        "phone-remote-vol-up": "درجة الحرارة+",
        "phone-remote-vol-down": "درجة الحرارة-",
        "phone-remote-ch-up": "رمز+",
        "phone-remote-ch-down": "رمز-",
        "phone-remote-ok": "توليد",
        "phone-remote-home": "إعادة تعيين",
        "phone-remote-back": "تراجع",
        "phone-remote-input": "حفظ",
        "phone-settings-title-display": "نموذج",
        "phone-settings-label-brightness": "درجة الحرارة",
        "phone-settings-label-contrast": "Top P",
        "phone-settings-label-colortemp": "عقوبة التكرار",
        "phone-settings-title-advanced": "متقدم",
        "phone-settings-label-peakbrightness": "أقصى رموز",
        "phone-settings-label-videorange": "تنسيق الاستجابة",
        "phone-premium-title-features": "التحسين المتقدم",
        "phone-premium-label-disable-tpc": "سلسلة الفكر",
        "phone-premium-label-disable-gsr": "التعلم قليل الأمثلة",
        "phone-premium-label-motionpro": "التحسين التلقائي",
        "phone-premium-label-servicemenu": "مكتبة الموجهات",
        "phone-premium-btn-access": "تصفح",
        "phone-nav-remote": "<span class=\"nav-icon\">🤖</span>موجه",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>نموذج",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>تحسين",
        "phone-connecting-text": "جاري الاتصال...",
        "form-title-beta-access": "الوصول المبكر للإصدار التجريبي",
        "form-title-beta-membership": "الوصول المبكر للإصدار التجريبي",
        "form-subtitle-beta-info": "انضم إلى قائمة الانتظار لتكون من أوائل من يجرب Prompt Master في الإصدار التجريبي.<br>أرسل بريدك الإلكتروني وسنخبرك عندما يصبح الإصدار التجريبي متاحًا!",
        "form-label-user-opinion": "ما التحديات التي تواجهها في هندسة الموجهات؟ ما الميزات التي تتوقعها؟ <span style=\"color:var(--text-tertiary); font-weight:400;\">(اختياري)</span>",
        "form-placeholder-user-opinion": "شارك أفكارك واحتياجاتك أو إحباطاتك...",
        "join-waitlist": "انضم لقائمة الانتظار",
        "get-early-access": "احصل على الوصول المبكر",
        "join": "انضم",
        "mobile-header-title": "انضم إلينا"
    },
    // Portuguese
    pt: {
        "headline": "Desbloqueie todo o potencial de seu OLED",
        "demo-premium-title-features": "设置功能",
        "demo-premium-label-disable-tpc": "禁用 TPC",
        "demo-premium-label-disable-gsr": "禁用 GSR",
        "demo-premium-label-servicemenu": "服务菜单",
        "demo-premium-btn-access": "访问",
        "demo-premium-label-motionpro": "OLED Motion Pro",
        "demo-nav-remote": "遥控器",
        "demo-nav-settings": "设置",
        "demo-nav-premium": "高级 ✨",
        "demo-mac-connecting-text": "正在连接到 LG C4 电视...",
        "promo-main-title": "LG OLED 控制中心。无处不在。",
        "promo-sub-text": "在您的整个数字生活中体验统一的原生控制<br>MacBook、iPad、iPhone 和 Android。",
        "demo-ios-notif-title": "解锁惊喜！",
        "demo-ios-notif-message": "试试设置面板，有小惊喜哦。",
        "phone-remote-vol-up": "音量+",
        "phone-remote-vol-down": "音量-",
        "phone-remote-ch-up": "频道+",
        "phone-remote-ch-down": "频道-",
        "phone-remote-ok": "确定",
        "phone-remote-home": "主页",
        "phone-remote-back": "返回",
        "phone-remote-input": "输入",
        "phone-settings-title-display": "显示",
        "phone-settings-label-brightness": "亮度",
        "phone-settings-label-contrast": "对比度",
        "phone-settings-label-colortemp": "色温",
        "phone-settings-title-advanced": "高级",
        "phone-settings-label-peakbrightness": "峰值亮度",
        "phone-settings-label-videorange": "视频范围",
        "phone-premium-title-features": "设置功能",
        "phone-premium-label-disable-tpc": "禁用 TPC",
        "phone-premium-label-disable-gsr": "禁用 GSR",
        "phone-premium-label-motionpro": "OLED Motion Pro",
        "phone-premium-label-servicemenu": "服务菜单",
        "phone-premium-btn-access": "访问",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>遥控器",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>设置",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>高级",
        "phone-connecting-text": "连接中...",
        "form-title-beta-access": "早期测试版访问",
        "form-title-beta-membership": "早期测试版访问",
        "form-subtitle-beta-info": "加入我们的等候名单，成为第一批试用 LG Control 测试版应用程序的用户。<br>提交您的电子邮件，我们会在测试版上线时通知您！",
        "form-label-user-opinion": "您喜欢或不喜欢其他电视控制应用的哪些方面？您对价格有什么期望？<span style=\"color:var(--text-tertiary); font-weight:400;\">(可选)</span>",
        "form-placeholder-user-opinion": "分享您的想法、愿望或不满...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "加入",
        "mobile-header-title": "Join us"
    },
    // Hindi
    hi: {
        "headline": "अपने OLED की पूरी क्षमता अनलॉक करें",
        "subtitle": "Oled Control OLED टीवी के लिए पूरी तरह से अनुकूलन योग्य रिमोट और सेटिंग्स परिवर्तक है।<br>उच्चतम प्रदर्शन के लिए टीपीसी और जीएसआर सीमाओं जैसी उन्नत सेटिंग्स अनलॉक करें।",
        "name-label": "नाम",
        "name-placeholder": "अमित शर्मा",
        "email-label": "ईमेल",
        "email-placeholder": "amit@example.com",
        "copyright": "© 2025 Oled Control. सर्वाधिकार सुरक्षित।",
        "app-name-header": "Oled Control",
        "app-name-footer": "Oled Control",
        "demo-app-name": "Oled Control",
        "demo-menu-file": "फ़ाइल",
        "demo-menu-edit": "संपादित करें",
        "demo-icon-title-wifi": "वाई-फाई",
        "demo-icon-title-volume": "वॉल्यूम",
        "demo-icon-title-control-center": "नियंत्रण केंद्र",
        "demo-macos-notif-title": "एक आश्चर्य अनलॉक करें!",
        "demo-macos-notif-message": "एक छोटे से आश्चर्य के लिए सेटिंग पैनल आज़माएँ।",
        "aria-close-notification": "सूचना बंद करें",
        "demo-desktop-icon-notes": "नोट्स.txt",
        "demo-desktop-icon-ideas": "विचार.txt",
        "demo-desktop-icon-project-files": "प्रोजेक्ट फ़ाइलें",
        "demo-window-title-lgcontrol": "LG Control",
        "demo-remote-status-connected": "LG C4 टीवी से जुड़ा है",
        "demo-remote-btn-menu": "मेनू",
        "demo-remote-label-vol": "वॉल्यूम",
        "demo-remote-label-ch": "चैनल",
        "demo-settings-title-display": "प्रदर्शन सेटिंग्स",
        "demo-settings-label-brightness": "चमक",
        "demo-settings-label-contrast": "कंट्रास्ट",
        "demo-settings-label-colortemp": "रंग तापमान (गर्मी)",
        "demo-settings-label-peakbrightness": "अधिकतम चमक",
        "option-off": "बंद",
        "option-low": "कम",
        "option-medium": "मध्यम",
        "option-high": "उच्च",
        "demo-settings-label-videorange": "वीडियो रेंज",
        "option-limited": "सीमित",
        "option-full": "पूर्ण",
        "demo-premium-title-features": "सेटिंग्स सुविधाएँ",
        "demo-premium-label-disable-tpc": "TPC अक्षम करें",
        "demo-premium-label-disable-gsr": "GSR अक्षम करें",
        "demo-premium-label-servicemenu": "सेवा मेनू",
        "demo-premium-btn-access": "पहुँच",
        "demo-premium-label-motionpro": "OLED मोशन प्रो",
        "demo-nav-remote": "रिमोट",
        "demo-nav-settings": "सेटिंग्स",
        "demo-nav-premium": "प्रीमियम ✨",
        "demo-mac-connecting-text": "LG C4 टीवी से कनेक्ट हो रहा है...",
        "promo-main-title": "एलजी ओएलईडी कमांड सेंटर। अब हर जगह।",
        "promo-sub-text": "अपने पूरे डिजिटल जीवन में एकीकृत, देशी नियंत्रण का अनुभव करें<br>मैकबुक, आईपैड, आईफोन और एंड्रॉइड।",
        "demo-ios-notif-title": "एक आश्चर्य अनलॉक करें!",
        "demo-ios-notif-message": "एक छोटे से आश्चर्य के लिए सेटिंग पैनल आज़माएँ।",
        "phone-remote-vol-up": "वॉल्यूम+",
        "phone-remote-vol-down": "वॉल्यूम-",
        "phone-remote-ch-up": "चैनल+",
        "phone-remote-ch-down": "चैनल-",
        "phone-remote-ok": "ठीक है",
        "phone-remote-home": "होम",
        "phone-remote-back": "वापस",
        "phone-remote-input": "इनपुट",
        "phone-settings-title-display": "प्रदर्शन",
        "phone-settings-label-brightness": "चमक",
        "phone-settings-label-contrast": "कंट्रास्ट",
        "phone-settings-label-colortemp": "रंग तापमान",
        "phone-settings-title-advanced": "उन्नत",
        "phone-settings-label-peakbrightness": "अधिकतम चमक",
        "phone-settings-label-videorange": "वीडियो रेंज",
        "phone-premium-title-features": "सेटिंग्स सुविधाएँ",
        "phone-premium-label-disable-tpc": "TPC अक्षम करें",
        "phone-premium-label-disable-gsr": "GSR अक्षम करें",
        "phone-premium-label-motionpro": "OLED मोशन प्रो",
        "phone-premium-label-servicemenu": "सेवा मेनू",
        "phone-premium-btn-access": "पहुँच",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>विद्युत उपकरण",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>सेटिंग्स",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>प्रिमियम",
        "phone-connecting-text": "कनेक्ट हो रहा है...",
        "form-title-beta-access": "प्रारंभिक बीटा अंगोद्धत",
        "form-title-beta-membership": "प्रारंभिक बीटा अंगोद्धत",
        "form-subtitle-beta-info": "आमादेश अपेक्षा वर्तमान सूची में शामिल होने के लिए हमारी प्रतीक्षा सूची में शामिल हों।<br>अपना ईमेल सबमिट करें और बीटा लाइव होने पर हम आपको सूचित करेंगे!",
        "form-label-user-opinion": "अन्य टीवी कंट्रोल ऐप्स के बारे में आपको क्या पसंद या नापसंद है? आप कीमत के लिए क्या उम्मीद करते हैं? <span style=\"color:var(--text-tertiary); font-weight:400;\">(ऐच्छिक)</span>",
        "form-placeholder-user-opinion": "अपने विचार, इच्छाएँ या हताशय शेयर करें...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "जुड़ें",
        "mobile-header-title": "Join us"
    },
    // Russian
    ru: {
        "headline": "Раскройте весь потенциал вашего OLED",
        "subtitle": "Oled Control — это полностью настраиваемый пульт дистанционного управления и средство смены настроек для телевизоров OLED.<br>Разблокируйте расширенные настройки, такие как ограничения TPC и GSR, для достижения максимальной производительности.",
        "name-label": "Имя",
        "name-placeholder": "Иван Петров",
        "email-label": "Электронная почта",
        "email-placeholder": "ivan@example.com",
        "copyright": "© 2025 Oled Control. Все права защищены.",
        "app-name-header": "Oled Control",
        "app-name-footer": "Oled Control",
        "demo-app-name": "Oled Control",
        "demo-menu-file": "File",
        "demo-menu-edit": "Edit",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volume",
        "demo-icon-title-control-center": "Control Center",
        "demo-macos-notif-title": "Unlock a Surprise!",
        "demo-macos-notif-message": "Try the Settings panel for a little surprise.",
        "aria-close-notification": "Close notification",
        "demo-desktop-icon-notes": "Notes.txt",
        "demo-desktop-icon-ideas": "Ideas.txt",
        "demo-desktop-icon-project-files": "Project Files",
        "demo-window-title-lgcontrol": "LG Control",
        "demo-remote-status-connected": "Connected to LG C4 TV",
        "demo-remote-btn-menu": "MENU",
        "demo-remote-label-vol": "VOL",
        "demo-remote-label-ch": "CH",
        "demo-settings-title-display": "Display Settings",
        "demo-settings-label-brightness": "Brightness",
        "demo-settings-label-contrast": "Contrast",
        "demo-settings-label-colortemp": "Color Temperature (Warmth)",
        "demo-settings-label-peakbrightness": "Peak Brightness",
        "option-off": "Off",
        "option-low": "Low",
        "option-medium": "Medium",
        "option-high": "High",
        "demo-settings-label-videorange": "Video Range",
        "option-limited": "Limited",
        "option-full": "Full",
        "demo-premium-title-features": "Settings Features",
        "demo-premium-label-disable-tpc": "Disable TPC",
        "demo-premium-label-disable-gsr": "Disable GSR",
        "demo-premium-label-servicemenu": "Service Menu",
        "demo-premium-btn-access": "Access",
        "demo-premium-label-motionpro": "OLED Motion Pro",
        "demo-nav-remote": "Remote",
        "demo-nav-settings": "Settings",
        "demo-nav-premium": "Premium ✨",
        "demo-mac-connecting-text": "Connecting to LG C4 TV...",
        "promo-main-title": "LG OLED Command Center. Now Everywhere.",
        "promo-sub-text": "Experience unified, native control across your entire digital life<br>MacBook, iPad, iPhone, and Android.",
        "demo-ios-notif-title": "Unlock a Surprise!",
        "demo-ios-notif-message": "Try the Settings panel for a little surprise.",
        "phone-remote-vol-up": "Vol+",
        "phone-remote-vol-down": "Vol-",
        "phone-remote-ch-up": "Ch+",
        "phone-remote-ch-down": "Ch-",
        "phone-remote-ok": "OK",
        "phone-remote-home": "Home",
        "phone-remote-back": "Back",
        "phone-remote-input": "Input",
        "phone-settings-title-display": "Display",
        "phone-settings-label-brightness": "Brightness",
        "phone-settings-label-contrast": "Contrast",
        "phone-settings-label-colortemp": "Color Temperature",
        "phone-settings-title-advanced": "Advanced",
        "phone-settings-label-peakbrightness": "Peak Brightness",
        "phone-settings-label-videorange": "Video Range",
        "phone-premium-title-features": "Settings Features",
        "phone-premium-label-disable-tpc": "Disable TPC",
        "phone-premium-label-disable-gsr": "Disable GSR",
        "phone-premium-label-motionpro": "OLED Motion Pro",
        "phone-premium-label-servicemenu": "Service Menu",
        "phone-premium-btn-access": "Access",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>Remote",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Settings",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Premium",
        "phone-connecting-text": "Connexion...",
        "form-title-beta-access": "Accès Bêta Antecipé",
        "form-title-beta-membership": "Accès Bêta Antecipé",
        "form-subtitle-beta-info": "Rejoignez notre liste d'attente pour être parmi les premiers à essayer l'application LG Control en version bêta.<br>Soumettez votre e-mail et nous vous informerons lorsque la bêta sera disponible!",
        "form-label-user-opinion": "Qu'est-ce que vous aimez ou n'aimez pas dans les autres applications de contrôle TV? Qu'attendez-vous pour le prix? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Optionnel)</span>",
        "form-placeholder-user-opinion": "Partagez vos pensées, souhaits ou frustrations...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "Присоединиться",
        "mobile-header-title": "Join us"
    },
    // Japanese
    ja: {
        "headline": "OLEDの可能性を最大限に引き出す",
        "subtitle": "Oled Controlは、OLEDテレビ用の完全にカスタマイズ可能なリモコンおよび設定変更ツールです。<br>TPCやGSRリミットなどの高度な設定を解除して、最高のパフォーマンスを実現します。",
        "name-label": "名前",
        "name-placeholder": "田中太郎",
        "email-label": "メール",
        "email-placeholder": "tanaka@example.com",
        "copyright": "© 2025 Oled Control. 全著作権所有。",
        "app-name-header": "Oled Control",
        "app-name-footer": "Oled Control",
        "demo-app-name": "Oled Control",
        "demo-menu-file": "File",
        "demo-menu-edit": "Edit",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volume",
        "demo-icon-title-control-center": "Control Center",
        "demo-macos-notif-title": "Unlock a Surprise!",
        "demo-macos-notif-message": "Try the Settings panel for a little surprise.",
        "aria-close-notification": "Close notification",
        "demo-desktop-icon-notes": "Notes.txt",
        "demo-desktop-icon-ideas": "Ideas.txt",
        "demo-desktop-icon-project-files": "Project Files",
        "demo-window-title-lgcontrol": "LG Control",
        "demo-remote-status-connected": "Connected to LG C4 TV",
        "demo-remote-btn-menu": "MENU",
        "demo-remote-label-vol": "VOL",
        "demo-remote-label-ch": "CH",
        "demo-settings-title-display": "Display Settings",
        "demo-settings-label-brightness": "Brightness",
        "demo-settings-label-contrast": "Contrast",
        "demo-settings-label-colortemp": "Color Temperature (Warmth)",
        "demo-settings-label-peakbrightness": "Peak Brightness",
        "option-off": "Off",
        "option-low": "Low",
        "option-medium": "Medium",
        "option-high": "High",
        "demo-settings-label-videorange": "Video Range",
        "option-limited": "Limited",
        "option-full": "Full",
        "demo-premium-title-features": "Settings Features",
        "demo-premium-label-disable-tpc": "Disable TPC",
        "demo-premium-label-disable-gsr": "Disable GSR",
        "demo-premium-label-servicemenu": "Service Menu",
        "demo-premium-btn-access": "Access",
        "demo-premium-label-motionpro": "OLED Motion Pro",
        "demo-nav-remote": "Remote",
        "demo-nav-settings": "Settings",
        "demo-nav-premium": "Premium ✨",
        "demo-mac-connecting-text": "Connecting to LG C4 TV...",
        "promo-main-title": "LG OLED Command Center. Now Everywhere.",
        "promo-sub-text": "Experience unified, native control across your entire digital life<br>MacBook, iPad, iPhone, and Android.",
        "demo-ios-notif-title": "Unlock a Surprise!",
        "demo-ios-notif-message": "Try the Settings panel for a little surprise.",
        "phone-remote-vol-up": "Vol+",
        "phone-remote-vol-down": "Vol-",
        "phone-remote-ch-up": "Ch+",
        "phone-remote-ch-down": "Ch-",
        "phone-remote-ok": "OK",
        "phone-remote-home": "Home",
        "phone-remote-back": "Back",
        "phone-remote-input": "Input",
        "phone-settings-title-display": "Display",
        "phone-settings-label-brightness": "Brightness",
        "phone-settings-label-contrast": "Contrast",
        "phone-settings-label-colortemp": "Color Temperature",
        "phone-settings-title-advanced": "Advanced",
        "phone-settings-label-peakbrightness": "Peak Brightness",
        "phone-settings-label-videorange": "Video Range",
        "phone-premium-title-features": "Settings Features",
        "phone-premium-label-disable-tpc": "Disable TPC",
        "phone-premium-label-disable-gsr": "Disable GSR",
        "phone-premium-label-motionpro": "OLED Motion Pro",
        "phone-premium-label-servicemenu": "Service Menu",
        "phone-premium-btn-access": "Access",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>Remote",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Settings",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Premium",
        "phone-connecting-text": "Connexion...",
        "form-title-beta-access": "Accès Bêta Antecipé",
        "form-title-beta-membership": "Accès Bêta Antecipé",
        "form-subtitle-beta-info": "Rejoignez notre liste d'attente pour être parmi les premiers à essayer l'application LG Control en version bêta.<br>Soumettez votre e-mail et nous vous informerons lorsque la bêta sera disponible!",
        "form-label-user-opinion": "Qu'est-ce que vous aimez ou n'aimez pas dans les autres applications de contrôle TV? Qu'attendez-vous pour le prix? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Optionnel)</span>",
        "form-placeholder-user-opinion": "Partagez vos pensées, souhaits ou frustrations...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "参加する",
        "mobile-header-title": "Join us"
    },
    // French
    fr: {
        "headline": "Libérez tout le potentiel de votre OLED",
        "subtitle": "Oled Control est une télécommande et un modificateur de paramètres entièrement personnalisables pour les téléviseurs OLED.<br>Déverrouillez les paramètres avancés tels que les limites TPC et GSR pour des performances optimales.",
        "name-label": "Nom",
        "name-placeholder": "Marie Dupont",
        "email-label": "E-mail",
        "email-placeholder": "marie@exemple.com",
        "copyright": "© 2025 Oled Control. Tous droits réservés.",
        "app-name-header": "Oled Control",
        "app-name-footer": "Oled Control",
        "demo-app-name": "Oled Control",
        "demo-menu-file": "File",
        "demo-menu-edit": "Edit",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volume",
        "demo-icon-title-control-center": "Control Center",
        "demo-macos-notif-title": "Unlock a Surprise!",
        "demo-macos-notif-message": "Try the Settings panel for a little surprise.",
        "aria-close-notification": "Close notification",
        "demo-desktop-icon-notes": "Notes.txt",
        "demo-desktop-icon-ideas": "Ideas.txt",
        "demo-desktop-icon-project-files": "Project Files",
        "demo-window-title-lgcontrol": "LG Control",
        "demo-remote-status-connected": "Connected to LG C4 TV",
        "demo-remote-btn-menu": "MENU",
        "demo-remote-label-vol": "VOL",
        "demo-remote-label-ch": "CH",
        "demo-settings-title-display": "Display Settings",
        "demo-settings-label-brightness": "Brightness",
        "demo-settings-label-contrast": "Contrast",
        "demo-settings-label-colortemp": "Color Temperature (Warmth)",
        "demo-settings-label-peakbrightness": "Peak Brightness",
        "option-off": "Off",
        "option-low": "Low",
        "option-medium": "Medium",
        "option-high": "High",
        "demo-settings-label-videorange": "Video Range",
        "option-limited": "Limited",
        "option-full": "Full",
        "demo-premium-title-features": "Settings Features",
        "demo-premium-label-disable-tpc": "Disable TPC",
        "demo-premium-label-disable-gsr": "Disable GSR",
        "demo-premium-label-servicemenu": "Service Menu",
        "demo-premium-btn-access": "Access",
        "demo-premium-label-motionpro": "OLED Motion Pro",
        "demo-nav-remote": "Remote",
        "demo-nav-settings": "Settings",
        "demo-nav-premium": "Premium ✨",
        "demo-mac-connecting-text": "Connecting to LG C4 TV...",
        "promo-main-title": "LG OLED Command Center. Now Everywhere.",
        "promo-sub-text": "Experience unified, native control across your entire digital life<br>MacBook, iPad, iPhone, and Android.",
        "demo-ios-notif-title": "Unlock a Surprise!",
        "demo-ios-notif-message": "Try the Settings panel for a little surprise.",
        "phone-remote-vol-up": "Vol+",
        "phone-remote-vol-down": "Vol-",
        "phone-remote-ch-up": "Ch+",
        "phone-remote-ch-down": "Ch-",
        "phone-remote-ok": "OK",
        "phone-remote-home": "Home",
        "phone-remote-back": "Back",
        "phone-remote-input": "Input",
        "phone-settings-title-display": "Display",
        "phone-settings-label-brightness": "Brightness",
        "phone-settings-label-contrast": "Contrast",
        "phone-settings-label-colortemp": "Color Temperature",
        "phone-settings-title-advanced": "Advanced",
        "phone-settings-label-peakbrightness": "Peak Brightness",
        "phone-settings-label-videorange": "Video Range",
        "phone-premium-title-features": "Settings Features",
        "phone-premium-label-disable-tpc": "Disable TPC",
        "phone-premium-label-disable-gsr": "Disable GSR",
        "phone-premium-label-motionpro": "OLED Motion Pro",
        "phone-premium-label-servicemenu": "Service Menu",
        "phone-premium-btn-access": "Access",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>Remote",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Settings",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Premium",
        "phone-connecting-text": "Connexion...",
        "form-title-beta-access": "Accès Bêta Antecipé",
        "form-title-beta-membership": "Accès Bêta Antecipé",
        "form-subtitle-beta-info": "Rejoignez notre liste d'attente pour être parmi les premiers à essayer l'application LG Control en version bêta.<br>Soumettez votre e-mail et nous vous informerons lorsque la bêta sera disponible!",
        "form-label-user-opinion": "Qu'est-ce que vous aimez ou n'aimez pas dans les autres applications de contrôle TV? Qu'attendez-vous pour le prix? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Optionnel)</span>",
        "form-placeholder-user-opinion": "Partagez vos pensées, souhaits ou frustrations...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "Rejoindre",
        "mobile-header-title": "Join us"
    },
    // German
    de: {
        "headline": "Schöpfen Sie das volle Potenzial Ihres OLED aus",
        "subtitle": "Oled Control ist eine vollständig anpassbare Fernbedienung und Einstellungsänderung für OLED-Fernseher.<br>Schalten Sie erweiterte Einstellungen wie TPC- und GSR-Grenzwerte für Spitzenleistung frei.",
        "name-label": "Name",
        "name-placeholder": "Hans Schmidt",
        "email-label": "E-Mail",
        "email-placeholder": "hans@beispiel.de",
        "copyright": "© 2025 Oled Control. Alle Rechte vorbehalten.",
        "app-name-header": "Oled Control",
        "app-name-footer": "Oled Control",
        "demo-app-name": "Oled Control",
        "demo-menu-file": "File",
        "demo-menu-edit": "Edit",
        "demo-icon-title-wifi": "Wi-Fi",
        "demo-icon-title-volume": "Volume",
        "demo-icon-title-control-center": "Control Center",
        "demo-macos-notif-title": "Unlock a Surprise!",
        "demo-macos-notif-message": "Try the Settings panel for a little surprise.",
        "aria-close-notification": "Close notification",
        "demo-desktop-icon-notes": "Notes.txt",
        "demo-desktop-icon-ideas": "Ideas.txt",
        "demo-desktop-icon-project-files": "Project Files",
        "demo-window-title-lgcontrol": "LG Control",
        "demo-remote-status-connected": "Connected to LG C4 TV",
        "demo-remote-btn-menu": "MENU",
        "demo-remote-label-vol": "VOL",
        "demo-remote-label-ch": "CH",
        "demo-settings-title-display": "Display Settings",
        "demo-settings-label-brightness": "Brightness",
        "demo-settings-label-contrast": "Contrast",
        "demo-settings-label-colortemp": "Color Temperature (Warmth)",
        "demo-settings-label-peakbrightness": "Peak Brightness",
        "option-off": "Off",
        "option-low": "Low",
        "option-medium": "Medium",
        "option-high": "High",
        "demo-settings-label-videorange": "Video Range",
        "option-limited": "Limited",
        "option-full": "Full",
        "demo-premium-title-features": "Settings Features",
        "demo-premium-label-disable-tpc": "Disable TPC",
        "demo-premium-label-disable-gsr": "Disable GSR",
        "demo-premium-label-servicemenu": "Service Menu",
        "demo-premium-btn-access": "Access",
        "demo-premium-label-motionpro": "OLED Motion Pro",
        "demo-nav-remote": "Remote",
        "demo-nav-settings": "Settings",
        "demo-nav-premium": "Premium ✨",
        "demo-mac-connecting-text": "Connecting to LG C4 TV...",
        "promo-main-title": "LG OLED Command Center. Now Everywhere.",
        "promo-sub-text": "Experience unified, native control across your entire digital life<br>MacBook, iPad, iPhone, and Android.",
        "demo-ios-notif-title": "Unlock a Surprise!",
        "demo-ios-notif-message": "Try the Settings panel for a little surprise.",
        "phone-remote-vol-up": "Vol+",
        "phone-remote-vol-down": "Vol-",
        "phone-remote-ch-up": "Ch+",
        "phone-remote-ch-down": "Ch-",
        "phone-remote-ok": "OK",
        "phone-remote-home": "Home",
        "phone-remote-back": "Back",
        "phone-remote-input": "Input",
        "phone-settings-title-display": "Display",
        "phone-settings-label-brightness": "Brightness",
        "phone-settings-label-contrast": "Contrast",
        "phone-settings-label-colortemp": "Color Temperature",
        "phone-settings-title-advanced": "Advanced",
        "phone-settings-label-peakbrightness": "Peak Brightness",
        "phone-settings-label-videorange": "Video Range",
        "phone-premium-title-features": "Settings Features",
        "phone-premium-label-disable-tpc": "Disable TPC",
        "phone-premium-label-disable-gsr": "Disable GSR",
        "phone-premium-label-motionpro": "OLED Motion Pro",
        "phone-premium-label-servicemenu": "Service Menu",
        "phone-premium-btn-access": "Access",
        "phone-nav-remote": "<span class=\"nav-icon\">📱</span>Remote",
        "phone-nav-settings": "<span class=\"nav-icon\">⚙️</span>Settings",
        "phone-nav-premium": "<span class=\"nav-icon\">✨</span>Premium",
        "phone-connecting-text": "Connexion...",
        "form-title-beta-access": "Accès Bêta Antecipé",
        "form-title-beta-membership": "Accès Bêta Antecipé",
        "form-subtitle-beta-info": "Rejoignez notre liste d'attente pour être parmi les premiers à essayer l'application LG Control en version bêta.<br>Soumettez votre e-mail et nous vous informerons lorsque la bêta sera disponible!",
        "form-label-user-opinion": "Qu'est-ce que vous aimez ou n'aimez pas dans les autres applications de contrôle TV? Qu'attendez-vous pour le prix? <span style=\"color:var(--text-tertiary); font-weight:400;\">(Optionnel)</span>",
        "form-placeholder-user-opinion": "Partagez vos pensées, souhaits ou frustrations...",
        "join-waitlist": "Join Waitlist",
        "get-early-access": "Get Early Access",
        "join": "Beitreten",
        "mobile-header-title": "Join us"
    }
};

// Language direction settings for RTL languages
const rtlLanguages = ['ar'];

// High-performance DOM element cache for translations
const translationCache = new Map();
const getTranslatableElement = (selector) => {
    if (!translationCache.has(selector)) {
        translationCache.set(selector, document.querySelector(selector));
    }
    return translationCache.get(selector);
};

// Frame-timing aware task scheduler for 120 FPS
class TranslationFrameController {
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
                console.error('Translation task error:', error);
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

const translationFrameController = new TranslationFrameController();

// Function to set language with ultra-high performance optimizations
async function setLanguage(lang) {
    // Default to English if the language is not supported
    if (!translations[lang]) {
        lang = 'en';
    }
    
    // Use frame controller for non-blocking DOM operations
    await translationFrameController.schedule(() => {
        // Set the HTML lang attribute
        document.documentElement.lang = lang;
        
        // Set RTL direction if needed
        if (rtlLanguages.includes(lang)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }, 'urgent');

    // Batch DOM updates for better performance
    const transElements = document.querySelectorAll('[data-trans]');
    const placeholderElements = document.querySelectorAll('[data-trans-placeholder]');
    
    // Process translation elements in chunks to avoid blocking
    const chunkSize = 10;
    for (let i = 0; i < transElements.length; i += chunkSize) {
        const chunk = Array.from(transElements).slice(i, i + chunkSize);
        
        await translationFrameController.schedule(() => {
            chunk.forEach(element => {
                // Check if the element is within the demo UI
                if (!element.closest('.mini-screen-demo') && !element.closest('.phone-demo-container')) {
                    const key = element.getAttribute('data-trans');
                    if (translations[lang][key]) {
                        element.innerHTML = translations[lang][key];
                    }
                }
            });
        }, 'normal');
    }
    
    // Process placeholder elements in chunks
    for (let i = 0; i < placeholderElements.length; i += chunkSize) {
        const chunk = Array.from(placeholderElements).slice(i, i + chunkSize);
        
        await translationFrameController.schedule(() => {
            chunk.forEach(element => {
                const key = element.getAttribute('data-trans-placeholder');
                if (translations[lang][key]) {
                    element.placeholder = translations[lang][key];
                }
            });
        }, 'normal');
    }
    
    // Update current language display and save preference
    await translationFrameController.schedule(() => {
        const currentLangElement = getTranslatableElement('#current-language');
        if (currentLangElement) {
            currentLangElement.textContent = lang.toUpperCase();
        }
        
        // Save the language preference
        localStorage.setItem('preferredLanguage', lang);
    }, 'low');
}

// Initialize language from URL or local storage or browser preference
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');

    // Get language from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // Get language from localStorage
    const storedLang = localStorage.getItem('preferredLanguage');
    
    // Get language from browser
    const browserLang = navigator.language.split('-')[0];
    
    // Choose the language (URL > localStorage > browser > default)
    const lang = langParam || storedLang || (translations[browserLang] ? browserLang : 'en');
    
    // Set the initial language
    setLanguage(lang);

    // Toggle dropdown visibility
    languageSelector.addEventListener('click', (event) => {
        languageSelector.classList.toggle('active');
        event.stopPropagation(); // Prevent this click from immediately closing the dropdown
    });
    
    // Add click event to language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const language = option.getAttribute('data-lang');
            setLanguage(language);
            
            // Update URL without reloading the page
            const url = new URL(window.location);
            url.searchParams.set('lang', language);
            window.history.pushState({}, '', url);
            
            languageSelector.classList.remove('active'); // Close dropdown after selection
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!languageSelector.contains(event.target)) {
            languageSelector.classList.remove('active');
        }
    });
}); 