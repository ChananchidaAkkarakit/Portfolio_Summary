import Link from "next/link";
import { useRouter } from "next/router";

type MenuItem =
  | { label: string; href: string }
  | { label: string; href: { pathname: string; hash?: string } };

const Navbar = () => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    // ไปยังส่วน contact ในหน้า Home
    { label: "Contacts", href: { pathname: "/", hash: "contact" } },
  ];

  const asPath = router.asPath; // รวม hash ด้วย เช่น "/#contact"

  return (
    <nav className="bg-[#A4857B] text-white flex justify-center py-3 rounded-b-[90px] overflow-hidden">
      <div className="flex sm:space-x-6 md:space-x-10 text-sm sm:text-base md:text-lg lg:text-xl">
        {menuItems.map((item) => {
          const hrefString =
            typeof item.href === "string"
              ? item.href
              : `${item.href.pathname}${item.href.hash ? `#${item.href.hash}` : ""}`;

          const isActive = asPath === hrefString;

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
