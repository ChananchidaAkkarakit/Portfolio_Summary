// components/BottomNav.tsx
import Link from "next/link";
export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 w-full bg-red-500 text-white flex justify-around py-2 rounded-t-xl shadow-inner z-50">
            <Link href="/" className="font-bold">home</Link>
            <Link href="/gallery" className="font-bold">gallery</Link>
            <Link href="/post" className="font-bold">post</Link>
            <Link href="/updates" className="font-bold">updates</Link>
            <Link href="/others" className="font-bold">others</Link>
        </nav>
    );
}
