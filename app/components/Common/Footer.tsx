import Link from "next/link";
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/app/icons";

export default function Footer() {
  const links = [
    { id: 1, name: "About Us", href: "/about" },
    { id: 2, name: "Contact Us", href: "/contact" },
    { id: 3, name: "Privacy Policy", href: "/privacy-policy" },
    { id: 4, name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com/HourofSolutions",
      icon: <TwitterIcon />,
    },
    {
      id: 2,
      name: "Instagram",
      href: "https://www.instagram.com/hour_of_solution/",
      icon: <InstagramIcon />,
    },
    {
      id: 3,
      name: "Facebook",
      href: "https://www.facebook.com/Hourofsolution/",
      icon: <FacebookIcon />,
    },
    {
      id: 4,
      name: "Youtube",
      href: "https://youtube.com/@hourofsolutionuk",
      icon: <YoutubeIcon />,
    },
  ];

  return (
    <footer className="py-7 bg-primary text-white lg:px-8">
      <div className="container-block">
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:justify-between lg:border-b-2 lg:border-[#FEFEFE] lg:pb-5">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-5 px-5 lg:flex lg:items-center lg:px-0">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="link white-link text-center font-general-sans text-heading-4 font-bold lg:text-[22px] lg:leading-[34px]"
              >
                {link.name}
              </Link>
            ))}
          </ul>

          <div className="flex space-x-10 justify-center items-center p-5 border-y-2 border-[#435098] lg:border-none lg:px-0 lg:space-x-8">
            {socialLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                target="_blank"
                className="text-heading-4 font-bold hover:-translate-y-2 transition duration-300 ease-in-out"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-smallest font-general-sans font-medium px-5 text-center lg:text-xl lg:leading-[36px] lg:px-8">
          <p>
            {new Date().getFullYear()} © Hour of Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
