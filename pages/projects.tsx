import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "A work submission tracking and reporting system (2025)",
      description: "A full-stack smart locker platform with real-time control...",
      image: "/project1.png",
      tech: "React, TypeScript, MUI, Flutter, Supabase"
    },
    {
      title: "Portfolio Website Summary (2025)",
      description: "A personal portfolio website to showcase my engineering projects...",
      image: "/project2.png",
      tech: "Next.js, TypeScript, Tailwind CSS, Figma"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12 grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </main>
    </div>
  );
}
