import Link from "next/link";
import { VideoIcon } from "@/app/icons";

export default function Hero() {
  return (
    <header className="px-8 py-16 home-hero text-white lg:pt-20 lg:pb-40">
      <div className="text-center max-w-2xl mx-auto lg:max-w-4xl">
        <h1 className="text-heading-1 mb-5 font-black md:text-4xl lg:text-5xl lg:mb-8 xl:text-[56px] xl:leading-[65px]">
          Welcome to <br /> Hour of Solution
        </h1>
        <p className="font-general-sans text-body-1 font-medium mb-8 sm:text-base md:text-lg lg:text-2xl lg:leading-[38px] lg:mb-10">
          We are an inter-denominational group of God&apos;s people who believe
          in the saving power of Jesus Christ. Our mission is to raise people
          who are part of God&apos;s End Time Army.
        </p>
        <div className="flex flex-col space-y-5 items-center justify-center sm:flex-row sm:space-y-0 sm:items-center sm:space-x-5 lg:space-x-10 xl:space-x-20">
          <Link href="/">
            <button className="button button--white border-none outline-none m-0 py-3 px-16 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-20 lg:py-6">
              <span className="text-button text-center text-black font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
                Connect with Us
              </span>
            </button>
          </Link>
          <Link href="/" className="">
            <button className="button button--red border-none outline-none m-0 py-3 px-16 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-20 lg:py-6">
              <span className="!flex justify-center items-center space-x-3">
                <VideoIcon />
                <span className="text-button text-white font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
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
