/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <span className="block text-secondary font-medium mb-2 text-detail font-general-sans">
          OUR MISSION
        </span>
        <h2 className="text-heading-2 font-bold w-[210px] mx-auto">
          Hour of solution is a body that believes.
        </h2>
        <p className="font-general-sans text-body text-body-1 font-medium my-5">
          We are an inter-denominational group of God&apos;s people who believe
          in the saving power of Jesus Christ. Our mission is to raise people
          who are part of God&apos;s End Time Army.
        </p>
        <div>
          <Link href="/">
            <button className="w-[215px] border border-primary button button--blue outline-none m-0 py-3 px-8 font-bold font-aeonik relative inline-block overflow-hidden rounded-btn">
              <span className="text-button text-center text-white font-medium font-general-sans">
                Read More
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-5 mt-8">
        <div className="flex space-x-5">
          <div>
            <img
              className=""
              src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663719/hos/mission-img-1-mobile_mbcaul.png"
              alt="gathering of church members"
            />
          </div>
          <div>
            <img
              className=""
              src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663350/hos/mission-img-2-mobile_sdmrqr.png"
              alt="gathering of church members"
            />
          </div>
        </div>
        <div className="w-full">
          <img
            className=""
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1686663356/hos/mission-img-3-mobile_hpuumc.png"
            alt="gathering of church members"
          />
        </div>
      </div>
    </section>
  );
}
