import Link from "next/link";
import { useRouter } from "next/router";

type Href = string | { pathname: string; hash?: string };
type MenuItem = { label: string; href: Href };

const isObjHref = (href: Href): href is { pathname: string; hash?: string } =>
  typeof href === "object" && href !== null;

const strip = (url: string) => url.split("#")[0].split("?")[0];
const rootOf = (url: string) => {
  const parts = strip(url).split("/").filter(Boolean);
  return parts.length ? `/${parts[0]}` : "/";
};

const Navbar = () => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contacts", href: { pathname: "/", hash: "contact" } }, // ไป section บนหน้า Home
  ];

  const asPath = router.asPath;                 // e.g. "/#contact"
  const currentRoot = rootOf(asPath);           // "/"
  const currentHash = asPath.split("#")[1] || null; // "contact" หรือ null
  const homeActive = currentRoot === "/" && !currentHash;

  return (
    <nav className="bg-[#A4857B] text-white flex justify-center py-3 rounded-b-[90px] overflow-hidden">
      <div className="flex sm:space-x-6 md:space-x-10 text-sm sm:text-base md:text-lg lg:text-xl">
        {menuItems.map((item) => {
          const hrefObj = isObjHref(item.href) ? item.href : null;
          const hrefString = hrefObj
            ? `${hrefObj.pathname}${hrefObj.hash ? `#${hrefObj.hash}` : ""}`
            : (item.href as string);

          const itemRoot = rootOf(hrefString);

          let isActive = false;
          if (hrefObj?.hash) {
            // ลิงก์แบบ section: active เมื่ออยู่หน้า "/" และ hash ตรงกัน
            isActive = currentRoot === "/" && currentHash === hrefObj.hash;
          } else {
            // ลิงก์ปกติ: active เมื่อ root ตรงกัน
            // แต่ถ้าเป็น "/" ให้ active เฉพาะตอน "ไม่มี hash"
            isActive = itemRoot === currentRoot && (itemRoot !== "/" || homeActive);
          }

          return (
            <Link
              key={item.label}
              href={hrefString}
              className={`px-3 md:px-5 py-2 rounded-full transition ${
                isActive ? "bg-[#7B5F55]" : "hover:bg-[#7B5F55]"
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
