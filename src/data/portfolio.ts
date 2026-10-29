import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Waiz Hussain",
    monogram: "WH",
    role: "Full Stack Developer & AI Builder",
    secondaryRole: "Autonomous Systems Developer",
    location: "Pakistan",
    availability: "Available for Freelance Work & Full-Time",
    email: "waizhussain9955@gmail.com",
    whatsapp: "https://wa.me/923272051549",
    whatsappNumber: "+92 327 2051549",
    tagline: "I build real-world applications across web, mobile, and AI domains using Next.js, Flutter & Node.js.",
    bio: "I am a Full Stack Developer and AI Builder based in Pakistan. With hands-on experience in HTML5, CSS3, Tailwind CSS, React.js, Next.js, Node.js, Flutter, and Python, I specialize in building real-world applications across web, mobile, and AI domains. My deep focus on Autonomous Systems, SaaS products, and AI-assisted workflows drives me to create scalable, production-ready digital products.",
    resumeUrl: "/resume/Waiz_Resume_Full_Stack_Dev.pdf"
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/waizhussain9955",
      handle: "@waizhussain9955",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/waiz-hussain-6750392ba",
      handle: "waiz-hussain",
      icon: "linkedin"
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/923272051549",
      handle: "+92 327 2051549",
      icon: "message-circle"
    },
    {
      platform: "X / Twitter",
      url: "https://x.com/waizhussain",
      handle: "@waizhussain",
      icon: "twitter"
    }
  ],
  skills: [
    { name: "Agentic AI & LLMs", category: "core-ai", proficiency: 99, highlight: true },
    { name: "Autonomous Workflows", category: "core-ai", proficiency: 92, highlight: true },
    { name: "Gemini API", category: "core-ai", proficiency: 90, highlight: true },
    { name: "AI-Driven Dev", category: "core-ai", proficiency: 90, highlight: true },

    { name: "Next.js (App Router)", category: "frontend", proficiency: 85, highlight: true },
    { name: "React.js", category: "frontend", proficiency: 88, highlight: true },
    { name: "TypeScript", category: "frontend", proficiency: 82, highlight: true },
    { name: "Tailwind CSS", category: "frontend", proficiency: 90, highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", proficiency: 88 },
    { name: "HTML5 & Modern CSS3", category: "frontend", proficiency: 95 },

    { name: "Flutter & Dart", category: "mobile-backend", proficiency: 85, highlight: true },
    { name: "Android (Java/Kotlin)", category: "mobile-backend", proficiency: 80 },
    { name: "Node.js & Express.js", category: "mobile-backend", proficiency: 83, highlight: true },
    { name: "Python", category: "mobile-backend", proficiency: 78 },

    { name: "Git & GitHub", category: "tools", proficiency: 90 },
    { name: "Vercel & Deployment", category: "tools", proficiency: 90 },
    { name: "REST APIs & JSON", category: "tools", proficiency: 92 },
    { name: "Local Storage & State", category: "tools", proficiency: 88 }
  ],
  projects: [
    {
      id: "tiktok-downloader",
      title: "TikTok Downloader - Flagship SaaS",
      subtitle: "Watermark-free video downloader SaaS engine",
      description: "A complete SaaS ecosystem built from scratch for downloading TikTok videos efficiently. Features watermark-free downloads, fast processing engine, API integration, and high-performance clean responsive web UI.",
      category: "saas",
      tags: ["Next.js", "Node.js", "Express.js", "API Integration", "SaaS"],
      liveUrl: "https://tik-tokdownloader.xyz",
      githubUrl: "https://github.com/waizhussain9955/tiktok-downloader",
      featured: true
    },
    {
      id: "t-downloader-app",
      title: "T Downloader Android App",
      subtitle: "High-speed social video downloader mobile app",
      description: "Android-based video downloader app built with Flutter for fast, watermark-free video downloads. Features built-in download manager with pause/resume, download progress tracking, and dark/light mode.",
      category: "mobile",
      tags: ["Flutter", "Dart", "Android", "Download Manager"],
      apkUrl: "https://github.com/waizhussain9955/t-downloader-android-application/releases/download/v1.0.2-beta/T-downloader.apk",
      githubUrl: "https://github.com/waizhussain9955/t-downloader-android-application",
      featured: true
    },
    {
      id: "modern-watch-store",
      title: "Modern Watch Store",
      subtitle: "Luxury timepiece e-commerce frontend",
      description: "A modern e-commerce frontend showcasing premium watch collections with responsive UI, dynamic product listings, sleek modal previews, and smooth user flow.",
      category: "web",
      tags: ["HTML5", "CSS3", "JavaScript", "E-Commerce", "Responsive"],
      liveUrl: "https://modern-watch-store.vercel.app/",
      githubUrl: "https://github.com/waizhussain9955/modern-watch-store",
      featured: true
    },
    {
      id: "word-blaze",
      title: "Word Blaze Game",
      subtitle: "Interactive browser vocabulary puzzle",
      description: "An engaging browser-based word guessing game with dynamic game logic, state management, timer systems, and engaging animations.",
      category: "games",
      tags: ["JavaScript", "Game Logic", "CSS Animations", "HTML5"],
      liveUrl: "https://word-blaze.vercel.app/",
      githubUrl: "https://github.com/waizhussain9955/WordBlaze"
    },
    {
      id: "jewelry-store",
      title: "Jewelry Store Website",
      subtitle: "High-end jewelry & accessories showcase",
      description: "Modern and elegant jewelry showcase website designed to present luxury products with clean aesthetics, interactive collections, and optimized layout.",
      category: "web",
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://jewelry-store-ochre.vercel.app/",
      githubUrl: "https://github.com/waizhussain9955/jewelry-store"
    },
    {
      id: "5-word-letter",
      title: "5 Word Letter Web Game",
      subtitle: "Word puzzle challenge with interactive keyboard",
      description: "Interactive word puzzle web application featuring responsive grid interactions, virtual keyboard input, and real-time validation logic.",
      category: "games",
      tags: ["Next.js", "React", "JavaScript", "CSS3"],
      liveUrl: "https://5-word-letter.vercel.app/"
    },
    {
      id: "laptop-ecommerce",
      title: "Laptop E-Commerce Mobile App",
      subtitle: "Native Android hardware store mobile app",
      description: "Full-featured mobile application designed for browsing laptops and technical accessories with catalog filtering, cart management, and product specifications.",
      category: "mobile",
      tags: ["Android", "Java", "Kotlin", "Mobile UI"]
    },
    {
      id: "swift-translate-pro",
      title: "Swift Translate Pro",
      subtitle: "AI-powered real-time translation platform",
      description: "AI-enhanced multi-language translation web application supporting real-time text analysis, dialect mapping, and rapid translation execution.",
      category: "ai",
      tags: ["Next.js", "AI Integration", "REST APIs", "Node.js"]
    },
    {
      id: "smart-bachat-committee",
      title: "Smart Bachat Committee App",
      subtitle: "Community savings & committee finance tracker",
      description: "Cross-platform mobile application built to track ROSCA/Bachat committees, installment schedules, payout cycles, and member records with offline-first local storage.",
      category: "mobile",
      tags: ["Flutter", "Dart", "Local Storage", "Finance"]
    },
    {
      id: "unplug-ai",
      title: "Unplug_AI Chatbot",
      subtitle: "Autonomous offline-first intelligent agent",
      description: "Intelligent conversational agent integrating Google Gemini API with smart offline fallback mechanisms, local context persistence, and streamlined responses.",
      category: "ai",
      tags: ["Gemini API", "Node.js", "AI Agent", "JSON"]
    },
    {
      id: "smart-ocr-scanner",
      title: "Smart OCR Scanner",
      subtitle: "Document scanner & text recognition utility",
      description: "Mobile utility application built with Flutter utilizing optical character recognition (OCR) algorithms to capture, extract, edit, and export text from physical documents.",
      category: "mobile",
      tags: ["Flutter", "OCR", "Image Processing", "Dart"]
    },
    {
      id: "advanced-currency-converter",
      title: "Advanced Currency Converter",
      subtitle: "Live FX rates & multi-currency converter",
      description: "Real-time exchange rate calculation web tool supporting global currencies, historical rate calculation, and instant bidirectional conversions.",
      category: "web",
      tags: ["JavaScript", "Exchange Rate API", "CSS3", "HTML5"],
      liveUrl: "https://advanced-currency-converter.vercel.app/"
    }
  ],
  services: [
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      description: "Building responsive, ultra-fast web applications with Next.js App Router, React, and Node.js. Clean architecture, server rendering, and rock-solid performance.",
      iconName: "globe",
      deliverables: ["Next.js / React Apps", "REST & SaaS Architectures", "Performance & SEO Optimization"]
    },
    {
      id: "mobile-apps",
      title: "Cross-Platform Mobile Apps",
      description: "Developing native-quality iOS and Android applications with Flutter and Dart. Native device integrations, offline storage, and responsive fluid mobile UI.",
      iconName: "smartphone",
      deliverables: ["Flutter / Android Apps", "Download Managers & Utilities", "Offline-first Architecture"]
    },
    {
      id: "ai-systems",
      title: "AI & Autonomous Systems",
      description: "Integrating LLMs, Agentic AI, and Google Gemini into production workflows. Automated agent pipelines, conversational systems, and intelligent document extraction.",
      iconName: "bot",
      deliverables: ["Gemini & LLM Integrations", "Autonomous Workflows & Agents", "OCR & Intelligent Data Processing"]
    },
    {
      id: "frontend-design",
      title: "UI/UX & Design Systems",
      description: "Crafting modern, accessible, obsidian dark mode and light mode interfaces using Tailwind CSS and accessible component patterns.",
      iconName: "palette",
      deliverables: ["Custom Tailwind Design Systems", "WCAG 2.1 AA Accessibility", "Fluid Responsive Layouts"]
    }
  ]
};
