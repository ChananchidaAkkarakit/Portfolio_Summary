// pages/Projects.tsx
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main className="max-w-6xl mx-auto py-[70px] md:py-[100px] text-center">
        {/* Section Heading */}
        <h1 className="text-2xl md:text-4xl font-bold italic text-[#E996B2] ">
            Projects & Experience
        </h1>

        <ul className="mt-0">
          {projects.map((p) => (
            <li key={p.slug} className="py-3 mx-3 md:py-6 border-t border-[#A4857B] first:border-t-0">
              <ProjectCard
                slug={p.slug}
                title={p.title}
                description={p.description}
                role={p.role}
                tech={p.tech}
                thumb={p.thumb}
                
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
