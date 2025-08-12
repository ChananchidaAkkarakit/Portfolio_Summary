// pages/projects/[slug].tsx
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

const ICONS = {
  github: GithubIcon,
  figma: FigmaIcon,
  demo: ExternalIcon,
} as const;

export default function ProjectDetail() {
  const { query } = useRouter();
  const project = projects.find((p) => p.slug === query.slug);
  if (!project) return null;

  const {
    title,
    hero,
    headerImages = [], // รูปเพิ่มเฉพาะหน้า slug (ถ้ามี)
    description,
    role,
    duration,
    team,
    tools,
    links,
    features,
  } = project;

  // รวมรูปที่อยากโชว์ด้านบนให้เรียง "ข้างๆ กัน"
  const images = [hero, ...headerImages];

  return (
    <>
      {/* Navbar ลอยบนสุด */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-[100px] text-[#6E412C]">
        <div className="mb-4">
          <BackButton fallback="/projects" />
        </div>

        {/* ชื่อโปรเจกต์ */}
        <h1 className="text-2xl text-center md:text-3xl font-bold italic text-[#E996B2] mb-6">
          {title}
        </h1>

        {/* แกลเลอรีรูป: 1/2/3 คอลัมน์ + จัดกึ่งกลาง + เว้นช่องเท่ากัน */}
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

        {/* คำอธิบาย แสดงครั้งเดียวใต้รูป */}
        <p className="mt-6 text-[20px] leading-relaxed text-center">{description}</p>

        <hr className="my-6 border-[#A98177]" />

        <div className="grid md:grid-cols-3 gap-6">
          {/* คอลัมน์ซ้าย: รายละเอียด */}
          <div className="md:col-span-2 space-y-6 text-[17px]">
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

          {/* คอลัมน์ขวา: Links + เส้นคั่นยาวเท่าลิสต์ */}
          <div className="space-y-3">
            {links && links.length > 0 && (
              <div className="relative pl-5">
                {/* เส้นคั่นเฉพาะความสูงของลิสต์ */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-px bg-[#A98177]"
                />
                <div className="font-bold text-[17px]">Links</div>

                <ul className="mt-4 space-y-4 text-[17px]">
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
                            [{l.label}]
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
      </div>
    </>
  );
}
