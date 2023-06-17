import Link from "next/link";
import { VideoIcon } from "@/app/icons";

export default function Hero() {
  return (
    <header className="px-8 py-16 donate-hero text-white lg:pt-20 lg:pb-40">
      <div className="text-center max-w-[578px] mx-auto">
        <h1 className="text-heading-1 mb-5 font-black md:text-4xl lg:text-5xl lg:mb-8 xl:text-[56px] xl:leading-[65px]">
          Support our cause
        </h1>
        <p className="font-general-sans text-body-1 font-medium sm:text-base md:text-lg lg:text-2xl lg:leading-[38px]">
          Lorem ipsum dolor sit amet consectetur adipssising elit, dolor sit
          amet, lorem ipsum dolor sit amet, dolor sit amet, lorem ipsum dolor
          sit amet lorem ipsum.
        </p>
      </div>
    </header>
  );
}
