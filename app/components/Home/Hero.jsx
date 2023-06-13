import Link from "next/link";
import { VideoIcon } from "@/app/icons";

export default function Hero() {
  return (
    <header className="px-8 py-16 home-hero text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-heading-1 mb-5 font-black">
          Welcome to <br /> Hour of Solution
        </h1>
        <p className="font-general-sans text-body mb-8">
          We are an inter-denominational group of God&apos;s people who believe
          in the saving power of Jesus Christ. Our mission is to raise people
          who are part of God&apos;s End Time Army.
        </p>
        <div className="flex flex-col space-y-5">
          <Link href="/">
            <button className="w-[279px] button button--white border-none outline-none m-0 py-3 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
              <span className="text-button text-center text-black font-medium font-general-sans">
                Connect with Us
              </span>
            </button>
          </Link>
          <Link href="/" className="">
            <button className="w-[279px] button button--red border-none outline-none m-0 py-3 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
              <span className="!flex justify-center items-center space-x-3">
                <VideoIcon />
                <span className="text-button text-white font-medium font-general-sans">
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
