/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon, MenuIcon, TimesIcon } from "@/app/icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { id: 1, name: "About", href: "/about-us" },
    { id: 2, name: "Media", href: "/media" },
    { id: 3, name: "Events", href: "/events" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <div
        className={`
      ${isMenuOpen ? "transalte-y-0" : "-translate-y-full"}
      absolute right-0 top-0 z-20 w-full bg-primary px-5 pb-10 pt-24 text-white transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col space-y-7">
          {links.map((link) => (
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={link.href}
              key={link.id}
              className="link white-link text-left text-h4-t font-bold"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <nav className="relative z-[50] bg-primary p-5 text-white lg:py-6">
        <div className="container-block flex items-center justify-between">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-xl lg:text-3xl">
            <img
              className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
              src="/hour-of-solution-logo.jpg"
              alt="Hour of Solution Logo"
            />
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

            <button
              className="flex w-[25px] items-center justify-end lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <TimesIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
