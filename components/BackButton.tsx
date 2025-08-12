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
      className="inline-flex items-center gap-1 pl-4 pr-7 py-2 rounded-full
                 bg-amber-100 border-2 border-amber-100 text-2text-[#6E412C] hover:border-1 hover:border-[#A98177] shadow-sm"
      aria-label="Go back"
    >
      {/* ไอคอนลูกศรซ้าย (inline, ไม่ต้องติดตั้งไลบรารี) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      <span>Back</span>
    </button>
  );
}
