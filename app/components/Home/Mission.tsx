/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-white px-5 py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[930px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-2 block font-general-sans text-sm-m font-medium text-secondary md:text-sm-t lg:mb-3 lg:text-[26px] lg:font-semibold lg:leading-[28px]">
            OUR MISSION
          </span>
          <h2 className="mx-auto w-[210px] text-h2-m font-bold sm:w-[380px] md:text-h2-t lg:text-h2-d">
            Hour of solution is a body that believes.
          </h2>
          <p className="my-5 font-general-sans text-p1-m font-medium text-body md:text-p1-t lg:mb-7 lg:text-p1-d">
            We are an inter-denominational group of God&apos;s people who believe in the saving power of Jesus Christ.
            Our mission is to raise people who are part of God&apos;s End Time Army.
          </p>
          <div>
            <Link href="/">
              <button className="button button--blue font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-primary px-16 py-3 font-bold outline-none lg:px-20 lg:py-4">
                <span className="text-center font-general-sans text-bt-m font-medium text-white md:text-lg lg:text-bt-d2 lg:font-semibold">
                  Read More
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col space-y-5 sm:space-y-8 md:hidden">
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
        <div className="hidden md:mt-8 md:block lg:mt-12">
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
