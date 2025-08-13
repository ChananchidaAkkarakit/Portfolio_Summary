// lib/projects.ts
export type LinkItem = {
    label: string;
    href: string;
    kind?: "github" | "figma" | "demo" | "canva"; // ✅ เพิ่มชนิดลิงก์ (ไอคอนจะเลือกจากค่านี้)
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
        hardware?: string;
        planned?: string;             // ✅ ใช้ string ตัวเล็ก
        ui?: string;
    };
    links?: LinkItem[];
    features?: string[];
};

export const projects: Project[] = [
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
            { label: "GitHub Repository", href: "https://github.com/ChananchidaAkkarakit/Admin_Dashboard", kind: "github" },
            { label: "Figma Design", href: "https://www.figma.com/proto/ILoNAJAHd3SKVONGCceJwK/Untitled?node-id=4-2&t=1cSPxLIvC2JffERx-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A12", kind: "figma" },
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
        title: "Portfolio Website Summary (2025)",
        description:
            "A responsive portfolio website designed to present my engineering projects, resume, and UI/UX designs in a clean, professional layout. Built with a focus on clear structure, visual hierarchy, and accessibility across devices.",
        role: "Full‑stack Developer (in progress) & UI Designer",
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
            { label: "Figma Design", href: "https://www.figma.com/design/3U3zecXg7xUU1GjFKVXHM4/Untitled?node-id=16-244&t=B7Js87se2erpLC5h-0", kind: "figma" },
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
        slug: "Petofour",
        title: "Pet of Our (Mobile App UI Design)",
        description:
            "Mobile application concept that serves as a centralized hub for pet care services. Users can discover and book nearby pet services such as pet boarding, veterinary clinics, pharmacies, and pet food stores. Includes pet profiles, health records, and reminders to provide an end‑to‑end experience.",
        role: "UI/UX Designer",
        tech: "Figma, Flutter (prototype)",
        thumb: "/images/project3.svg",
        gallery: [
            "/images/petofout/P1.svg",
            "/images/petofout/P2.svg",
            "/images/petofout/P3.svg",
            "/images/petofout/P4.svg",
            "/images/petofout/P5.svg",
            "/images/petofout/P6.svg",
            "/images/petofout/P7.svg",
            "/images/petofout/P8.svg",
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
