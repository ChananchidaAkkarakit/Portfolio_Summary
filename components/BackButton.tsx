// components/BackButton.tsx
import { useRouter } from "next/router";

export default function BackButton({ fallback = "/projects" }: { fallback?: string }) {
  const router = useRouter();

  const goBack = () => {
    // มีประวัติการนำทาง? → back, ไม่งั้นไป fallback
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={goBack}
      className="inline-flex items-center gap-1 p-3 py-2 rounded-full
                 text-2text-[#6E412C] bg-[#FFE0E7]  hover:border-1 hover:border-[#6E412C] hover:border-2   "
      aria-label="Go back"
    >
      {/* ไอคอนลูกศรซ้าย (inline, ไม่ต้องติดตั้งไลบรารี) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      
    </button>
  );
}
