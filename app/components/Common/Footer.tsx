import Link from "next/link";
import { TwitterIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/app/icons";

export default function Footer() {
  const links = [
    {id: 1, name: "About Us", href: "/about"},
    {id: 2, name: "Contact Us", href: "/contact"},
    {id: 3, name: "Privacy Policy", href: "/privacy-policy"},
    {id: 4, name: "Terms & Conditions", href: "/terms-and-conditions"},
  ];

  const socialLinks = [
    {id: 1, name: "Twitter", href: "https://twitter.com", icon: <TwitterIcon />},
    {id: 2, name: "Instagram", href: "https://instagram.com", icon: <InstagramIcon />},
    {id: 3, name: "Facebook", href: "https://facebook.com", icon: <FacebookIcon />},
    {id: 4, name: "Youtube", href: "https://youtube.com", icon: <YoutubeIcon />},
  ]

  return (
    <footer className="py-7 bg-primary text-white">
      <div className="flex flex-col space-y-10">
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 px-5">
          {links.map((link) => (
            <Link href={link.href} key={link.id} className="link white-link text-heading-4 font-bold">{link.name}</Link>
          ))}
        </div>

        <div className="flex space-x-10 justify-center items-center p-5 border-y-2 border-[#435098]">
          {
            socialLinks.map((link) => (
              <Link href={link.href} key={link.id} className="text-heading-4 font-bold hover:-translate-y-2 transition duration-300 ease-in-out">
                {link.icon}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="mt-8 text-smallest font-general-sans font-medium px-5 text-center">
        <p>
          {new Date().getFullYear()} {" "}
          © Hour of Solution. All rights reserved. 
        </p>
      </div>
    </footer>
  );
}
