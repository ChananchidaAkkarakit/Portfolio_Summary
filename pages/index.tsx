import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Profile from "../public/images/profile.png";
import PhotoID from "../public/images/photoID.jpg";
import FolderIcon from "../src/assets/folder.svg";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  // ✅ hooks ต้องอยู่ top-level
  const isAuto = useRef(false);
  const lastY = useRef(0);
  const dir = useRef<"up" | "down">("down");

  useEffect(() => {
    const hero = document.getElementById("hero");
    const student = document.getElementById("student-id");
    const contact = document.getElementById("contact");
    const gateHero = document.getElementById("gate-hero");
    const gateStudentBottom = document.getElementById("gate-student-bottom");

    if (!hero || !student || !contact || !gateHero || !gateStudentBottom) return;

    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY;
      dir.current = y > lastY.current ? "down" : "up";
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const SNAP_DELAY = 550;
    const snapTo = (el: HTMLElement) => {
      if (isAuto.current) return;
      isAuto.current = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => (isAuto.current = false), SNAP_DELAY);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (isAuto.current) return;

        // ✅ สแนปเฉพาะตอนเลื่อนลงเท่านั้น
        if (dir.current === "up") return;

        for (const e of entries) {
          if (!e.isIntersecting) continue;

          // hero -> student (ลง)
          if (e.target === gateHero) snapTo(student);

          // student -> contact (ลง)
          if (e.target === gateStudentBottom) snapTo(contact);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );

    obs.observe(gateHero);
    obs.observe(gateStudentBottom);

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div >
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* จาก 2 คอลัมน์ ปรับเป็น 3 คอลัมน์ในจอใหญ่ */}
      <section id="hero" className="min-h-screen snap-start max-w-7xl mx-auto px-5 py-[100px] grid lg:grid-cols-3 gap-8 items-start">

        {/* ข้อความกินพื้นที่ 2 คอลัมน์ */}
        <div className="lg:col-span-2">
          <h1 className="font-karla text-[20px] md:text-[40px] font-bold text-[#E996B2] mb-5 text-center">
            Hello,<br /> I’m Chananchida Akkarakit
          </h1>

          {/* รูปใน mobile */}
          <div className="flex justify-center mb-5 lg:hidden">
            <Image
              src={Profile}
              alt="Profile"
              className="rounded-xl border-4 border-pink-200 w-2/5 h-auto"
            />
          </div>

          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            I’m a fourth-year Computer Engineering student with a strong interest in Frontend Development, especially in UI/UX design.
          </p>
          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            I enjoy creating applications that are user-friendly, effective, and well-structured using tools like React, MUI, and Flutter.
          </p>
          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            While I specialize in frontend, I’m also building up my backend skills to better understand and handle full-stack systems.
            I’ve gained experience working with APIs, managing databases, and implementing authentication using tools like MySQL and Supabase.
          </p>
          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            I see every project as a chance to learn and grow. Although I haven’t interned in a corporate setting yet,
            I’m eager to face real-world challenges and contribute fully as part of a team.
          </p>
          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            Thank you for your time — I look forward to the opportunity to grow with your organization.
          </p>
        </div>

        {/* คอลัมน์ 3 ใส่รูปใน desktop */}
        <div className="hidden lg:flex lg:justify-center lg:items-start py-24">
          <Image
            src={Profile}
            alt="Profile"
            width={280}
            //height={360}
            className="rounded-xl border-4 border-pink-200"
          />
        </div>
        <div id="gate-hero" className="h-[1px]" />   {/* เกทสำหรับเลื่อนลง */}
      </section>
      {/* Section Student ID */}

      <section
        id="student-id"
        className="min-h-screen snap-start max-w-7xl mx-auto px-5 py-[100px] grid lg:grid-cols-3 gap-8 "
      >
        {/* เกท (ถ้าใช้ JS observer) */}
        <div id="gate-student" className="lg:col-span-3 h-px w-full" aria-hidden="true" />

        {/* การ์ด Student ID */}
        <div className="lg:col-span-2 bg-[#FFE0E7] rounded-[30px] shadow-lg p-8 mx-auto md:max-w-none md:mx-0 md:w-[620px] md:h-[360px]">

          {/* แถบหัวการ์ด */}
          <div className="-mx-8 -mt-8 px-8 py-3 bg-[#E996B2] rounded-t-[30px] text-[23px] md:text-[35px] text-white text-center md:text-left">
            Student ID Card
          </div>

          {/* รูป + รายละเอียด */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-center">
            {/* รูป */}
            <div className="p-1 bg-white shadow-sm mx-auto md:mx-0">
              <Image
                src={PhotoID}
                alt="Student photo"
                width={220}
                height={280}
                className="object-cover w-[140px] h-auto md:w-[220px]"
              />
            </div>

            {/* รายละเอียด */}
            <div className="text-[#5b4a47] text-[15px] md:text-md text-center md:text-left">
              {[
                ["NAME :", "Chananchida Akkarakit"],
                ["NICKNAME :", "Baifern"],
                ["BIRTH :", "2004-01-03"],
                ["FACULTY :", "Engineering"],
                ["MAJOR :", "Computer Engineering"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-center md:justify-start items-baseline gap-2 border-b border-[#caa8b0] text-[16px] md:text-[20px] py-1"
                >
                  <span className="tracking-wide">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume ฝั่งขวา: แสดงเฉพาะ lg+ (ซ่อนบน md) */}
        <div className="hidden md:mr-20 lg:flex lg:col-start-3 lg:col-span-1 flex-col items-center gap-6 self-start pt-4 lg:justify-center">
          <a
            href="/Resume_Chananchida_Thai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <FolderIcon width={90} height={90} className="text-[#9AB0C5]" />
            <span className="font-karla text-xl text-[#8A6F64]">Resume_Thai.pdf</span>
          </a>
          <a
            href="/Resume_Chananchida_English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <FolderIcon width={90} height={90} className="text-[#9AB0C5]" />
            <span className="font-karla text-xl text-[#8A6F64]">Resume_English.pdf</span>
          </a>
        </div>

        {/* Interests Desktop */}
        <div className="hidden md:mr-10 mr-10 lg:block lg:col-span-3 w-full rounded-[24px] border-2 border-[#E996B2] bg-white text-[#E996B2] px-5 py-4 shadow-md">
          <h3 className="font-karla text-[20px] md:text-[25px] font-bold">Interests</h3>
          <p className="leading-relaxed font-karla text-lg md:text-[20px] text-justify text-[#A98177] indent-10">
            I'm interested in digital solution development, which spans from UX/UI design and building websites and applications, to leveraging in-depth data analysis with Power BI, implementing AI, and utilizing cloud technology for infrastructure.
          </p>
        </div>

        {/* Interests + Resume: แสดงสำหรับ <lg */}
        <div className="col-span-full mt-10 lg:hidden">
          {/* xs: 1 คอลัมน์ (โฟลเดอร์อยู่ใต้) | sm+: 2 คอลัมน์ (อยู่ข้างกัน) */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start">
            {/* Interests */}
            <div className="w-full rounded-[24px] border-2 border-[#E996B2] bg-white text-[#E996B2] px-5 py-4 shadow-md">
              <h3 className="font-karla text-[20px] sm:text-[22px] font-bold">Interests</h3>
              <p className="leading-relaxed font-karla text-base sm:text-[18px] text-left sm:text-justify text-[#A98177] indent-0 sm:indent-10">
                I'm interested in digital solution development, which spans from UX/UI design and building websites and applications, to leveraging in-depth data analysis with Power BI, implementing AI, and utilizing cloud technology for infrastructure.
              </p>
            </div>

            {/* Resume — xs: อยู่ใต้ Interests (เรียงแนวนอน), sm+: อยู่ขวา */}
            <div className="flex flex-row justify-center gap-10 mt-4 sm:flex-col sm:items-center sm:gap-1 sm:mt-0">
              <a href="/Resume_Chananchida_Thai.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <FolderIcon className="text-[#9AB0C5]" width={56} height={56} />
                <span className="font-karla text-[15px] text-[#8A6F64] text-center">Resume_Thai.pdf</span>
              </a>
              <a href="/Resume_Chananchida_English.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <FolderIcon className="text-[#9AB0C5]" width={56} height={56} />
                <span className="font-karla text-[15px] text-[#8A6F64] text-center">Resume_English.pdf</span>
              </a>
            </div>

          </div>
        </div>


        {/* Gate ด้านล่าง */}
        <div id="gate-student-bottom" className="h-[1px]" aria-hidden="true" />
      </section>

      <section
        id="contact"
        className="h-screen snap-start max-w-7xl mx-auto px-10 py-[80px] items-start"
      >
        <div id="gate-contact-top" aria-hidden="true" />
        <main className="mx-auto py-5">
          <ContactInfo />
        </main>
      </section>
    </div>
  );
}
