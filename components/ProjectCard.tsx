// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/projects";

type Props = Pick<Project, "slug" | "title" | "description" | "role" | "tech" | "thumb">;

export default function ProjectCard({ slug, title, description, role, tech, thumb }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex items-start gap-5 rounded-2xl p-3 transition hover:bg-amber-50 "
    >
      <div className="shrink-0 rounded-2xl bg-white shadow-md p-3">
        <div className="rounded-xl overflow-hidden">
          <Image src={thumb} alt={title} width={300} height={120} className="rounded-xl group-hover:scale-[1.02] transition" />
        </div>
      </div>

      <div className="mt-2">
        <h2 className="text-2xl font-semibold italic text-left text-[#6E412C]">{title}</h2>
        <p className="mt-1 text-[17px] leading-relaxed text-[#6E412C]">{description}</p>
        <p className="mt-1 text-[17px] text-[#6E412C]"><span className="font-semibold">Role:</span> {role}</p>
        <p className="mt-1 text-[17px] text-[#6E412C]"><span className="font-semibold">Tech:</span> {tech}</p>
      </div>
    </Link>
  );
}
