/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-[930px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="block text-secondary font-medium mb-2 text-detail font-general-sans lg:mb-3 lg:text-sm-1x lg:font-semibold">
            OUR MISSION
          </span>
          <h2 className="text-heading-2 font-bold w-[210px] mx-auto sm:text-3xl sm:w-[380px] md:text-4xl lg:text-[40px] lg:leading-[52px]">
            Hour of solution is a body that believes.
          </h2>
          <p className="font-general-sans text-body text-body-1 font-medium my-5 sm:text-base md:text-lg lg:text-2xl lg:leading-[38px] lg:mb-7">
            We are an inter-denominational group of God&apos;s people who
            believe in the saving power of Jesus Christ. Our mission is to raise
            people who are part of God&apos;s End Time Army.
          </p>
          <div>
            <Link href="/">
              <button className="border border-primary button button--blue outline-none m-0 py-3 px-16 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-20 lg:py-6">
                <span className="text-button text-center text-white font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
                  Read More
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-8 sm:space-y-8 md:hidden">
          <div className="flex space-x-5 sm:space-x-8">
            <div>
              <img
                className="w-full"
                src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663719/hos/mission-img-1-mobile_mbcaul.png"
                alt="gathering of church members"
              />
            </div>
            <div>
              <img
                className="w-full"
                src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663350/hos/mission-img-2-mobile_sdmrqr.png"
                alt="gathering of church members"
              />
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663356/hos/mission-img-3-mobile_hpuumc.png"
              alt="gathering of church members"
            />
          </div>
        </div>
        <div className="hidden md:block md:mt-8 lg:mt-12">
          <img
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1686739670/hos/mission-img_xpy2de.png"
            className="w-full"
            alt="gathering of church members"
          />
        </div>
      </div>
    </section>
  );
}
