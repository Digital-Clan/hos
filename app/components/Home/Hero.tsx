import Link from "next/link";
import { VideoIcon } from "@/app/icons";

export default function Hero() {
  return (
    <header className="home-hero px-8 py-16 text-white lg:pb-40 lg:pt-20">
      <div className="mx-auto max-w-2xl text-center lg:max-w-5xl">
        <h1 className="mb-5 text-h1-m font-black md:text-h1-t lg:mb-8 lg:text-h1-d">
          Welcome to <br /> Hour of Solution
        </h1>
        <p className="mb-8 font-general-sans text-p1-m font-medium sm:text-base md:text-p1-t lg:mb-10 lg:text-p1-d">
          We are an inter-denominational group of God&apos;s people who believe in the saving power of Jesus Christ. Our
          mission is to raise people who are part of God&apos;s End Time Army.
        </p>
        <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0 lg:space-x-10 xl:space-x-20">
          <Link href="/about-us">
            <button className="button button--white font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-bold outline-none lg:py-4">
              <span className="text-center font-general-sans text-bt-m font-medium text-black md:text-lg lg:text-bt-d2 lg:font-semibold">
                Connect with Us
              </span>
            </button>
          </Link>
          <Link href="https://youtube.com/@hourofsolutionuk" target="_blank" className="">
            <button className="button button--red font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border-none px-16 py-3 font-bold outline-none lg:py-4">
              <span className="!flex items-center justify-center space-x-3">
                <VideoIcon />
                <span className="font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
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
