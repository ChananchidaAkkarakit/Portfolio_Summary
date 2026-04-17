// lib/projects.ts
export type LinkItem = {
    label: string;
    href: string;
    kind?: "github" | "figma" | "demo" | "canva" | "doc" | "poster"; // ✅ เพิ่มชนิดลิงก์ (ไอคอนจะเลือกจากค่านี้)
};

// lib/projects.ts
export type Project = {
    slug: string;
    title: string;
    description: string;
    role: string;
    tech: string;
    thumb: string;
    hero: string;
    headerImages?: string[];
    gallery?: string[];
    duration?: string;
    team?: string;
    tools?: {
        frontend?: string;
        backend?: string;
        design?: string;
        hardware?: string;
        planned?: string;             // ✅ ใช้ string ตัวเล็ก
        ui?: string;
    };
    links?: LinkItem[];
    features?: string[];
};

export const projects: Project[] = [
    {
        slug: "AI-Agent",
        title: "AI Agent : Network Incident correlation in RAN and IPRAN Domain (January - March 2026)",
        description:
            "Developed a comprehensive AI Agent platform, featuring an intuitive UI/UX and a strategic data architecture transition from traditional relational tables to a Graph Database to support complex AI data relationships and processing. The system also integrates automated workflows via n8n, with high-level security ensured by Azure APIM and Key Vault for robust API credential management.",
        role: "Frontend Developer, UX/UI Designer",
        tech: "React, TypeScript, tailwindcss, Figma",
        thumb: "/images/AIAgent/Desktop - 1.png",
        gallery: [
            "/images/AIAgent/Desktop - 1.png",
            "/images/AIAgent/Desktop - 2.png",
            "/images/AIAgent/Desktop - 3.png",
        ],
        hero:"/images/AIAgent/Desktop - 1.png",
        duration: "Jan - Mar 2026",
        team: "Group Projects",
        tools: {
            frontend: "React + Vite + tailwindcss",
            // backend: "Supabase (PostgreSQL), MQTT, Node-RED",
            // hardware: "Raspberry Pi, VL53L0X, MCP23017, PCA9685",
            ui: "Figma (Prototype)",
        },
        links: [
            { label: "AI Agent Poster", href: "/AIAgent_Poster.pdf", kind: "poster" },
        ],
        features: [
            "Intuitive web-based UI/UX for seamless user interaction",
            "Architected data transition from relational tables to Graph Database for complex AI relationships",
            "Automated workflow integration using n8n",
            "Secure API credential management via Azure APIM & Key Vault",
        ],
    },
    {
        slug: "truesiteid",
        title: "TRUE Site ID : Preventive Maintenance (PM) (December 2026)",
        description:
            "A web application designed for on-site technicians to record inspection and preventive maintenance (PM) data. The system features a completely redesigned, mobile-friendly UI and introduces new practical functionalities. It streamlines workflows, allowing field teams to input data quickly and conveniently while eliminating the complexity of the legacy system.",
        role: "Frontend Developer, UX/UI Designer, Deployment",
        tech: "React, TypeScript, tailwindcss, Figma",
        thumb: "/images/truesiteid/Desktop - 3.svg",
        gallery: [
            "/images/truesiteid/Desktop - 3.svg",
            "/images/truesiteid/Desktop - 8.svg",
            "/images/truesiteid/Desktop - 10.svg",
            "/images/truesiteid/Desktop - 11.svg",
            "/images/truesiteid/Desktop - 12.svg",
            "/images/truesiteid/Desktop - 13.svg",
            "/images/truesiteid/Desktop - 14.svg",
            "/images/truesiteid/Desktop - 15.svg",
        ],
        hero:"/images/truesiteid/Desktop - 3.svg",
        duration: "Dec 2026",
        team: "Solo Projects",
        tools: {
            frontend: "React + Vite + tailwindcss",
            // backend: "Supabase (PostgreSQL), MQTT, Node-RED",
            // hardware: "Raspberry Pi, VL53L0X, MCP23017, PCA9685",
            ui: "Figma (Prototype)",
        },
        // links: [
        //     { label: "Admin GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Admin_Dashboard", kind: "github" },

        //     // { label: "Live Demo", href: "https://your-demo.site", kind: "demo" },
        //     { label: "User GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Mobile_App_FinalProject", kind: "github" },
        //     { label: "Admin Figma Design", href: "https://www.figma.com/proto/ILoNAJAHd3SKVONGCceJwK/Admin_Dashboard?node-id=4-2&t=Rd0sjbWoglJANiyB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A12", kind: "figma" },
        //     { label: "User Figma Design (Flow 1 & 2)", href: "https://www.figma.com/proto/M2Np1ouTmaPGKkw0Ae3v0F/Users_Mobile?node-id=2-2&t=9AmLzCEr4bgIP9Mn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1", kind: "figma" },
        //     // { label: "Live Demo", href: "https://your-demo.site", kind: "demo" },
        // ],
        features: [
            "Centralized dashboard for real-time site status",
            "Structured accordion-style inspection checklist",
            "Built-in image upload for visual evidence",
            "Before & After data and photo comparison",
            "Comprehensive logging for physical site data",
        ],
    },
    {
        slug: "locker",
        title: "A work submission tracking and reporting system (2025)",
        description:
            "A system for students to submit documents via smart lockers by scanning QR codes with a mobile app (Flutter). Admins and professors manage locker slots and monitor real-time status through a web dashboard (React). Raspberry Pi handles physical control and sensor feedback using MQTT and distance sensors.",
        role: "Fullstack Developer (React + Flutter), UI Designer",
        tech: "React, TypeScript, MUI, Flutter, Supabase",
        thumb: "/images/project1.png",
        hero: "/images/project1.png",
        duration: "Mar 2025 – Present",
        team: "1 Fullstack Dev + 1 Hardware Engineer",
        tools: {
            frontend: "Flutter (Mobile), React + Vite + MUI (Web Admin)",
            backend: "Supabase (PostgreSQL), MQTT, Node-RED",
            hardware: "Raspberry Pi, VL53L0X, MCP23017, PCA9685",
            ui: "Figma (Prototype)",
        },
        links: [
            { label: "Admin GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Admin_Dashboard", kind: "github" },
            // { label: "Live Demo", href: "https://your-demo.site", kind: "demo" },
            { label: "User GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Mobile_App_FinalProject", kind: "github" },
            { label: "Admin Figma Design", href: "https://www.figma.com/proto/ILoNAJAHd3SKVONGCceJwK/Admin_Dashboard?node-id=4-2&t=Rd0sjbWoglJANiyB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A12", kind: "figma" },
            { label: "User Figma Design (Flow 1 & 2)", href: "https://www.figma.com/proto/M2Np1ouTmaPGKkw0Ae3v0F/Users_Mobile?node-id=2-2&t=9AmLzCEr4bgIP9Mn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1", kind: "figma" },
            // { label: "Live Demo", href: "https://your-demo.site", kind: "demo" },
        ],
        features: [
            "QR-based access for each locker slot",
            "Real-time monitoring via dashboard",
            "Remote door/slot control from UI",
            "Role-based access (students/professors/admins)",
            "Submission log with history & visualization",
        ],
    },
    {
        slug: "portfolio",
        title: "Personal Portfolio Website (2025)",
        description:
            "A responsive portfolio website designed to present my engineering projects, resume, and UI/UX designs in a clean, professional layout. Built with a focus on clear structure, visual hierarchy, and accessibility across devices.",
        role: "Full‑stack Developer (in progress) & UX/UI Designer",
        tech: "Next.js, TypeScript, Tailwind CSS, Figma",
        thumb: "/images/project2.png",
        hero: "/images/project2.png",
        headerImages: ["/images/project2add.png",],
        duration: "August 2025 - Present",
        team: "Solo Projects",
        tools: {
            planned: "Next.js, Tailwind CSS, TypeScript, Vercel",
            ui: "Figma (Prototype)",
        },
        links: [
            { label: "GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/portfolio", kind: "github" },
            { label: "Figma Design", href: "https://www.figma.com/proto/3U3zecXg7xUU1GjFKVXHM4/Portfolio-Website?node-id=1-2&t=kcNloNHulj4KG6Yk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2", kind: "figma" },
            // { label: "Live Demo", href: "https://your-demo.site", kind: "demo" },
        ],
        features: [
            "Clean, minimalist layout with pastel UI theme",
            "Responsive design for desktop",
            "Project sections with structured highlights",
            "Smooth scroll and animated transitions",
            "Support for GitHub / Figma per project",
        ],
    },
    {
        slug: "concert-ticket",
        title: "Concert Event and Ticket Management System (2025)",
        description:
            "A desktop application for booking and managing concert tickets. It supports Admin and Customer users, where Admin can manage concert data, customers, and sales reports, while Customers can register an account, choose a concert, select seats and check the status of their bookings.",
        role: "Developer, System Designer",
        tech: "Java, OOP, UML (Use Case / Activity / Class Diagram)",
        thumb: "/images/concert-ticket.svg",
        hero: "/images/ticket1.png",
        headerImages: [
            "/images/ticket3.png",
        ],
        
        duration: "Jan 2025 – Mar 2025",
        team: "3 Members (System Analyst, Designer, Developer)",
        tools: {
            frontend: "Java Swing (Desktop UI)",
            backend: "Java OOP, Database (MySQL/SQLite)",
            design: "UML (Use Case, Activity, Class Diagram)",
            ui: "Java Swing Components"
        },
        links: [
            { label: "GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Concert_Tickets", kind: "github" },
            { label: "Handout", href: "/Mini Project ระบบจัดการกิจกรรมคอนเสิร์ตและบัตรเข้าชม.pdf", kind: "doc" },
        ],
        features: [
            "Login and account registration system",
            "Concert event management (add/edit/delete)",
            "Customer data management",
            "Seat booking and ticket issuance",
            "Sales report for Admin users"
        ]
    },
    {
        slug: "Petofour",
        title: "Pet of Our (Mobile App UI Design)",
        description:
            "Mobile application concept that serves as a centralized hub for pet care services. Users can discover and book nearby pet services such as pet boarding, veterinary clinics, pharmacies, and pet food stores. Includes pet profiles, health records, and reminders to provide an end‑to‑end experience.",
        role: "UI/UX Designer",
        tech: "Figma, Flutter (prototype)",
        thumb: "/images/project3.svg",
        gallery: [
            "/images/petofour/P1.svg",
            "/images/petofour/P2.svg",
            "/images/petofour/P3.svg",
            "/images/petofour/P4.svg",
            "/images/petofour/P5.svg",
            "/images/petofour/P6.svg",
            "/images/petofour/P7.svg",
            "/images/petofour/P8.svg",
        ],
        hero: "/images/project3.svg",
        duration: "November 2023",
        team: "1 UX/UI Design",
        tools: {
            frontend: "Planned React Native implementation",
            ui: "Canva"
        },
        links: [
            {
                label: "Poster Design (.pdf)",
                href: "/Design_Thinking.pdf",
                kind: "canva"
            }
        ],
        features: [
            "User login and signup system",
            "Pet category selection (dogs, cats, etc.)",
            "View detailed profiles and images of pets",
            "Pet adoption service (Adopt a pet)",
            "Adoption listings and recommendations",
            "Book nearby pet boarding services",
            "Find veterinary clinics",
            "Locate pet pharmacies and accessories shops",
            "Search nearby pet food stores",
            "Highlight and recommend new pets",
        ]
    }
];
