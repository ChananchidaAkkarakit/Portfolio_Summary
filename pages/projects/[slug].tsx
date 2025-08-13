// pages/projects/[slug].tsx
import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { projects } from "../../lib/projects";
import BackButton from "../../components/BackButton";

// ไอคอน (ต้องตั้งค่า SVGR ไว้แล้ว)
import GithubIcon from "@/assets/github.svg";
import FigmaIcon from "@/assets/figma.svg";
import ExternalIcon from "@/assets/external-link.svg";
import CanvaIcon from "@/assets/canva.svg";
const ICONS = {
  github: GithubIcon,
  figma: FigmaIcon,
  demo: ExternalIcon,
  canva: CanvaIcon
} as const;

const ArrowLIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={`w-5 h-5 ${props.className ?? ""}`} aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={`w-5 h-5 ${props.className ?? ""}`} aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function ProjectDetail() {
  const { query } = useRouter();
  const project = projects.find((p) => p.slug === query.slug);
  if (!project) return null;

  const {
    title,
    hero,
    headerImages = [], 
    description,
    role,
    duration,
    team,
    tools,
    links,
    features,
  } = project;


  const images = [hero, ...headerImages];

  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: "left" | "right") => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-[70px] md:py-[100px] text-[#6E412C]">
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute left-0">
            <BackButton fallback="/projects" />
          </div>
          <h1 className="text-xl md:text-3xl font-bold italic text-[#E996B2]">
            {title}
          </h1>
        </div>

        <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 justify-items-center">
          {images.map((src, i) => (
            <div key={`${src}-${i}`} className="w-full max-w-[560px] rounded-2xl bg-white shadow p-3">
              <Image
                src={src}
                alt={`${title} image ${i + 1}`}
                width={560}
                height={350}
                className="w-full h-auto rounded-xl object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <p className="mt-6 md:text-[20px] leading-relaxed text-center">{description}</p>

        <hr className="my-6 border-[#A98177]" />

        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:col-span-2 space-y-6 md:text-[17px]">
            <div>
              <div className="font-bold">Role</div>
              <div>{role}</div>
            </div>

            {duration && (
              <div>
                <div className="font-bold">Duration</div>
                <div>{duration}</div>
              </div>
            )}

            {team && (
              <div>
                <div className="font-bold">Team</div>
                <div>{team}</div>
              </div>
            )}

            {tools && (
              <div>
                <div className="font-bold">Tools</div>
                <div className="space-y-1">
                  {tools.frontend && <div>Frontend: {tools.frontend}</div>}
                  {tools.backend && <div>Backend: {tools.backend}</div>}
                  {tools.hardware && <div>Hardware: {tools.hardware}</div>}
                  {tools.ui && <div>UI: {tools.ui}</div>}
                  {tools.planned && <div>Planned Stack: {tools.planned}</div>}
                </div>
              </div>
            )}

            {features && features.length > 0 && (
              <div className="pt-2">
                <div className="font-bold">Key Features</div>
                <ul className="list-disc pl-6 space-y-1">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {links && links.length > 0 && (
              <div className="relative pl-5">

                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-[#A98177]"
                />
                <div className="font-bold md:text-[17px]">Links</div>

                <ul className="mt-4 space-y-4 md:text-[17px]">
                  {links.map((l) => {
                    const Icon = (l.kind && ICONS[l.kind]) || ExternalIcon;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          target="_blank"
                          className="flex items-center gap-3 group"
                        >
                          <Icon className="w-8 h-8 text-[#E996B2] shrink-0 " />
                          <span className="underline-offset-2 group-hover:underline">
                            {l.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

        </div>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-semibold text-[#6E412C]">
                More screenshots
              </h2>
              {/* <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scrollBy("left")}
                  className="px-3 py-1 rounded-full border border-[#A98177] hover:bg-[#f7efe9]"
                  aria-label="Scroll left"
                >
                  ◀
                </button>
                <button
                  onClick={() => scrollBy("right")}
                  className="px-3 py-1 rounded-full border border-[#A98177] hover:bg-[#f7efe9]"
                  aria-label="Scroll right"
                >
                  ▶
                </button>
              </div> */}
            </div>

            <div className="relative">
              <div
                ref={railRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth
                   py-2
                   [scrollbar-width:thin]  // Firefox
                   [&::-webkit-scrollbar]:h-2
                   [&::-webkit-scrollbar-thumb]:bg-[#A98177]/60
                   [&::-webkit-scrollbar-track]:bg-transparent"
              >
                {project.gallery.map((src, i) => (
                  <div key={src + i} className="snap-center shrink-0 w-[300px] sm:w-[400px] md:w-[480px]">
                    <div className="bg-white rounded-2xl shadow p-3">
                      <Image
                        src={src}
                        alt={`${title} screenshot ${i + 1}`}
                        width={760}
                        height={480}
                        className="w-full h-auto rounded-xl object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollBy("left")}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
             z-10 w-10 h-10 items-center justify-center rounded-full bg-white/80
             shadow hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#A98177]"
                aria-label="Scroll left"
              >
                <ArrowLIcon />
              </button>

              <button
                onClick={() => scrollBy("right")}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
             z-10 w-10 h-10 items-center justify-center rounded-full bg-white/80
             shadow hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#A98177]"
                aria-label="Scroll right"
              >
                <ArrowRIcon />
              </button>

            </div>
          </section>
        )}

      </div>
    </>

  );
}
