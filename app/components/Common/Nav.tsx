import Link from "next/link";
import { HeartIcon, MenuIcon } from "@/app/icons";

export default function Nav() {
  const links = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Media", href: "/media" },
    { id: 3, name: "Events", href: "/events" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-primary text-white p-5 lg:py-6">
      <div className="container-block flex items-center justify-between">
        <span className="text-xl lg:text-3xl">Logo ipsum</span>

        <ul className="hidden lg:flex lg:space-x-12">
          {links.map((link) => (
            <Link href={link.href} key={link.id} className="link white-link text-center font-general-sans font-bold text-[23px] leading-[37px]">
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center space-x-5">
          <Link
            href="/"
            className="bg-white rounded-[56px] py-2 px-4 flex items-center space-x-3 hover:scale-90 transition-transform duration-200 ease-in-out lg:px-10 lg:py-4"
          >
            <span className="text-black text-[15px] lg:text-btn-1x lg:font-semibold">
              Donate
            </span>
            <span className="heart-animation">
              <HeartIcon />
            </span>
          </Link>

          <button className="lg:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
