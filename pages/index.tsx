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
      <section id="hero" className="min-h-screen  snap-start max-w-7xl mx-auto px-5 py-[100px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

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
        className="min-h-screen snap-start max-w-7xl mx-auto px-5 py-[100px] grid lg:grid-cols-3 gap-8 items-start"
      >
        {/* เกท (ถ้าใช้ JS observer) */}
        <div id="gate-student" className="col-span-3 h-px w-full" aria-hidden="true" />

        {/* การ์ดกินคอลัมน์ 1–2 */}
        <div className=" lg:col-span-2 lg:w-[620px] lg:h-[360px] bg-[#FFE0E7] rounded-[30px] shadow-lg p-8 self-start">
          {/* แถบหัวการ์ดพาดเต็มขอบ (ใช้ -mx/-mt ตัด padding ออก) */}
          <div className="-mx-8 -mt-8 px-8 py-3 bg-[#E996B2] rounded-t-[30px] 
                  text-[35px] font-Light text-white ">
            Student ID Card
          </div>

          {/* รูป + รายละเอียด */}
          <div className="mt-10 grid grid-cols-[160px_1fr] gap-6 items-center ">
            {/* รูปซ้าย */}
            <div className="p-1 bg-white shadow-sm ">
              <Image
                src={PhotoID}           // หรือ "/images/profile.png"
                alt="Student photo"
                width={220}
                height={280}            // อัตราส่วน 3:4
                className=" object-cover"
              />
            </div>

            {/* รายละเอียดขวา */}
            <div className="text-[#5b4a47]">
              <div className="flex items-baseline gap-2 border-b border-[#caa8b0] text-[20px] py-1">
                <span className="font-regular  tracking-wide">NAME :</span>
                <span>Chananchida Akkarakit</span>
              </div>
              <div className="flex items-baseline gap-2 border-b border-[#caa8b0] text-[20px] py-1">
                <span className="font-regular tracking-wide">NICKNAME :</span>
                <span>Baifern</span>
              </div>
              <div className="flex items-baseline gap-2 border-b border-[#caa8b0] text-[20px] py-1">
                <span className="font-regular tracking-wide">BIRTH :</span>
                <span>2004-01-03</span>
              </div>
              <div className="flex items-baseline gap-2 border-b border-[#caa8b0] text-[20px] py-1">
                <span className="font-regular tracking-wide">FACULTY :</span>
                <span>Engineering</span>
              </div>
              <div className="flex items-baseline gap-2 border-b border-[#caa8b0] text-[20px] py-1">
                <span className="font-regular tracking-wide">MAJOR :</span>
                <span>Computer Engineering</span>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ ปิดการ์ดให้เรียบร้อย */}

        {/* คอลัมน์ขวา = โฟลเดอร์ */}
        <div className="lg:col-start-3 lg:col-span-1  flex-col items-center lg:items-start gap-2 self-start pt-4 hidden md:flex md:justify-center">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
            <FolderIcon width={130} height={130} className="text-[#9AB0C5] block" />
            <span className="font-karla text-2xl text-[#8A6F64]">Resume.pdf</span>
          </a>
        </div>
        {/* แถบหัวข้อเต็มแถว แต่ไม่ล้นขอบคอนเทนเนอร์ */}
        <div className="col-span-full mt-10">
          <div className="w-full h-[150px] rounded-[24px] bg-[#E996B2] text-white px-6 py-6 shadow-md">
            <h3 className="font-karla font-semi leading-tight text-[20px] md:text-[25px]">
              My Passion
            </h3>
          </div>
          <div className="col-start-2  flex-col items-center gap-2 self-start pt-4 flex justify-center mb-5 md:hidden">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
              <FolderIcon width={130} height={130} className="text-[#9AB0C5] block" />
              <span className="font-karla text-2xl text-[#8A6F64]">Resume.pdf</span>
            </a>
          </div>
        </div>
        {/* ...ใน section#student-id ด้านล่างสุดของ content */}
        <div id="gate-student-bottom" className=" h-[1px]" aria-hidden="true" />
      </section>
      <section
        id="contact"
        className="h-screen snap-start max-w-7xl mx-auto px-2 py-[80px] items-start"
      >
        <div id="gate-contact-top" aria-hidden="true" />
        <main className="mx-auto py-5">
          <ContactInfo />
        </main>
      </section>
    </div>
  );
}
