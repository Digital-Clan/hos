import Link from "next/link";
import { HeartIcon, MenuIcon } from "@/app/icons";

export default function Nav() {
  const links = [
    { id: 1, name: "About", href: "/about-us" },
    { id: 2, name: "Media", href: "/media" },
    { id: 3, name: "Events", href: "/events" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-primary p-5 text-white lg:py-6">
      <div className="container-block flex items-center justify-between">
        <Link href="/" className="text-xl lg:text-3xl">
          Logo ipsum
        </Link>

        <ul className="hidden lg:flex lg:space-x-12">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="link white-link text-center font-general-sans text-[23px] font-bold leading-[37px]"
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="flex items-center space-x-5">
          <Link
            href="/donate"
            className="flex items-center space-x-3 rounded-[56px] bg-white px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-90 lg:px-10 lg:py-4"
          >
            <span className="text-bt-m text-black lg:text-bt-d lg:font-semibold">Donate</span>
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
