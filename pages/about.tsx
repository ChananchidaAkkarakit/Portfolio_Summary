// pages/about.tsx
import Navbar from "../components/Navbar";

type TimelineItem = {
  title: string;
  org?: string;
  role?: string;
  period?: string; // e.g. "Mar 2025 – Present"
  details?: string[];
  link?: { label: string; href: string };
};

type Certificate = {
  name: string;
  issuer: string;
  date?: string;
  href?: string;
};

type SkillCategory = {
  title: string;
  items: string[]
};

const aboutData = {
  intro:
    "I am a fourth-year Computer Engineering student with a focus on Frontend development. I am skilled at accurately translating designs and effectively collaborating with backend systems. I am a continuous learner who values teamwork and is dedicated to applying my skills to improve both myself and the organization.",

  skillsTech: [
    { title: "Frontend Frameworks & Libraries", items: ["React", "Flutter"] },
    { title: "Design & UI", items: ["Figma", "Material UI", "UI Implementation"] },
    { title: "Backend & API", items: ["Express.js"] },
    { title: "Database", items: ["PostgreSQL"] },
    { title: "Development Tools & Languages", items: ["Vite", "TypeScript"] },
  ] as SkillCategory[],
  skillsSoft: [
    "Leadership", "Creativity", "Flexibility",
    "Teamwork", "Attention to Detail", "Management Skills",
  ],

  Projects: [
    {
      title: "A work submission tracking and reporting system ",
      role: "Full-stack Developer",
      org: "University Project",
      period: "Mar 2025 – Present",
      details: [
        "Admin dashboard (React + MUI) + Flutter mobile app",
        "Raspberry Pi + VL53L0X + MQTT, Node-RED",
        "Role-based control, real-time status, submission logs",
      ],
      link: { label: "Project detail", href: "/projects/smart-locker" },
    },
    {
      title: "Portfolio Website Summary",
      org: "Personal Project",
      period: "Aug 2025 – Present",
      details: [
        "Next.js + Tailwind + TypeScript",
        "Pastel theme, section navigation, project pages with slug",
      ],
      link: { label: "Project detail", href: "/projects/portfolio" },
    },
  ] as TimelineItem[],
  activities: [
  {
    title:
      "Selected by professors to serve as a student representative for the department evaluation",
    org: "Department of Computer Engineering",
    period: "July 2025",
    details: [
      "Participated in the department evaluation process as a student representative",
    ],
  },
  {
    title: "Served in the department welfare team",
    org: "Department of Computer Engineering",
    period: "Year 2024",
    details: [
      "Responsible for preparing beverages and food for students in the department",
    ],
  },
  {
    title: "Head of the department welfare team for Project Day",
    org: "Department of Computer Engineering",
    period: "November 2024",
    details: [
      "Oversaw and coordinated the welfare team’s operations during Project Day",
    ],
  },
  {
    title: "Staff member for freshman orientation",
    org: "Faculty of Engineering",
    period: "June 2024",
    details: [
      "Assisted in organizing and supporting activities for the freshman orientation event",
    ],
  },
  ] as TimelineItem[],
  certificates: [
    { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2024" },
    { name: "Flutter Foundations", issuer: "Udemy", date: "2024" },
] as Certificate[],
  interests: ["Website & Mobile Application", "Power BI", "UX/UI Design", "AI Development", "Cloud Computing Technology"],
  education: [
    {
      title: "B.Eng. Computer Engineering",
      org: "RMUTT",
      period: "2022 – Present",
      details: ["Focus: Frontend, UI/UX, Backend"],
    },
  ] as TimelineItem[],
  languages: [],
  awards: [] as string[],
} satisfies {
  intro: string;
  skillsTech: SkillCategory[];   // ✅ เพิ่ม
  skillsSoft: string[];          // ✅ เพิ่ม
  Projects: TimelineItem[];
  activities: TimelineItem[];
  certificates: Certificate[];
  interests: string[];
  education: TimelineItem[];
  languages?: string[];
  awards?: string[];
};


export default function AboutPage() {
  const c = {
    text: "#6E412C",
    pink: "#E996B2",
    line: "#A98177",
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="max-w-5xl mx-auto px-4 py-[100px]" style={{ color: c.text }}>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold italic text-center" style={{ color: c.pink }}>
          About Me
        </h1>

        {/* Intro */}
        <p className="mt-6 text-[17px] leading-relaxed text-start indent-10">{aboutData.intro}</p>

        {/* Skills (สองฝั่ง: Tech ซ้าย / Soft ขวา) */}
        <div className="mt-2 grid md:grid-cols-2 gap-20 items-start">
          <Section title="Technical Skills" noDivider>
            <div className="grid grid-cols-1 gap-4">
              {aboutData.skillsTech.map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-semibold min-h-[1.75rem]">{cat.title}</h3>
                  <ul className="mt-2 list-disc pl-5 space-y-0.5">
                    {cat.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Soft Skills" noDivider>
            <ul className="mt-2 grid gap-x-8 gap-y-1">
              {aboutData.skillsSoft.map((s) => (
                <li key={s} className="flex items-start">
                  <span className="mt-3 mr-3 h-1.5 w-1.5 rounded-full bg-[#6E412C]" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
        <Divider color={c.line} />

        {/* Projects + Education (2-column) */}
        <div className="grid md:grid-cols-2 gap-20">
          <Section title="Projects" noDivider>
            <Timeline items={aboutData.Projects} lineColor={c.line} />
          </Section>
          <Section title="Education" noDivider>
            <Timeline items={aboutData.education} lineColor={c.line} />
          </Section>
        </div>
        <Divider color={c.line} />

        {/* Activities + Certificates */}
        <div className="grid  gap-10">
          <Section title="Activities" noDivider>
            <Timeline items={aboutData.activities} lineColor={c.line} />
          </Section>
          {/* <Section title="Certificates" noDivider>
            <ul className="space-y-3">
              {aboutData.certificates.map((cf) => (
                <li key={`${cf.name}-${cf.issuer}`} className=" flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: c.text }} />
                  <div>
                    <div className="font-semibold">{cf.name}</div>
                    <div className="text-sm opacity-90">
                      {cf.issuer} {cf.date ? `• ${cf.date}` : ""}
                    </div>
                    {cf.href && (
                      <a
                        href={cf.href}
                        target="_blank"
                        className="text-sm underline underline-offset-2"
                        style={{ color: c.pink }}
                      >
                        View
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Section> */}
        </div>
        <Divider color={c.line} />

        {/* Interests + Languages + Awards */}
        <div className="grid gap-10">
          <Section title="Interests" noDivider>
            <TagList items={aboutData.interests} lineColor={c.line} />
          </Section>
          {aboutData.languages?.length ? (
            <Section title="Languages" noDivider>
              <TagList items={aboutData.languages} lineColor={c.line} />
            </Section>
          ) : null}
          {aboutData.awards?.length ? (
            <Section title="Awards" noDivider>
              <ul className="list-disc pl-5 space-y-1">{aboutData.awards.map((a) => <li key={a}>{a}</li>)}</ul>
            </Section>
          ) : null}
        </div>
      </main>
    </>
  );
}

/* ---------- small components ---------- */
function Section({
  title,
  children,
  noDivider = false,
}: {
  title: string;
  children: React.ReactNode;
  noDivider?: boolean;
}) {
  return (
    <section className="mt-6 md:mt-8">   {/* เดิม mt-10 */}
      <h2 className="text-xl md:text-2xl font-extrabold italic text-[#6E412C]">
        <span className="underline decoration-[#FEC3D7] decoration-3 underline-offset-[8px]">
          {title}
        </span>
      </h2>
      <div className="mt-3 md:mt-4">{children}</div>  {/* เดิม mt-4 */}
      {!noDivider && <Divider />}
    </section>
  );
}

function Divider({ color = "#A98177" }: { color?: string }) {
  return <hr className="my-6 md:my-8" style={{ borderColor: color }} />; // เดิม my-10
}

function Timeline({ items, lineColor }: { items: TimelineItem[]; lineColor: string }) {
  return (
    <ul className="relative pl-5">
      {/* vertical line */}
      <span className="absolute left-0 top-0 bottom-0 w-px" style={{ background: lineColor }} />
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="mb-6">
          <div className="font-semibold">{item.title}</div>
          {item.role && <div className="text-sm font-medium">Role: {item.role}</div>}
          {item.org && <div className="text-sm opacity-90">{item.org}</div>}
          {item.period && <div className="text-sm opacity-80">Duration: {item.period}</div>}
          {item.details?.length ? (
            <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px]">
              {item.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          ) : null}
          {item.link && (
            <a
              href={item.link.href}
              className="mt-1 inline-block underline underline-offset-2"
              style={{ color: "#A98177" }}
            >
              {item.link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

function TagList({ items, lineColor }: { items: string[]; lineColor: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="px-3 py-1 rounded-full text-sm bg-amber-100"
          style={{ border: `1px solid ${lineColor}` }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

