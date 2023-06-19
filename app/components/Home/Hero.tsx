import Link from "next/link";
import { VideoIcon } from "@/app/icons";

export default function Hero() {
  return (
    <header className="home-hero px-8 py-16 text-white lg:pb-40 lg:pt-20">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h1 className="text-heading-1 mb-5 font-black md:text-4xl lg:mb-8 lg:text-5xl xl:text-[56px] xl:leading-[65px]">
          Welcome to <br /> Hour of Solution
        </h1>
        <p className="text-body-1 mb-8 font-general-sans font-medium sm:text-base md:text-lg lg:mb-10 lg:text-2xl lg:leading-[38px]">
          We are an inter-denominational group of God&apos;s people who believe in the saving power of Jesus Christ. Our
          mission is to raise people who are part of God&apos;s End Time Army.
        </p>
        <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0 lg:space-x-10 xl:space-x-20">
          <Link href="/">
            <button className="button button--white font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-bold outline-none lg:px-20 lg:py-6">
              <span className="text-button text-center font-general-sans font-medium text-black lg:text-btn-1x lg:font-semibold">
                Connect with Us
              </span>
            </button>
          </Link>
          <Link href="/" className="">
            <button className="button button--red font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-bold outline-none lg:px-20 lg:py-6">
              <span className="!flex items-center justify-center space-x-3">
                <VideoIcon />
                <span className="text-button font-general-sans font-medium text-white lg:text-btn-1x lg:font-semibold">
                  Watch Live
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
