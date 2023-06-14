import Link from "next/link";

export default function Memoriam() {
  return (
    <section className="px-5 pb-10 pt-28 home-memoriam text-white lg:pb-20">
      <div className="container-block lg:flex lg:justify-end">
        <div className="lg:w-[560px]">
          <span className="block font-general-sans text-detail lg:text-sm-1x lg:font-semibold lg:text-[#C4C4C4]">
            IN MEMORIAM
          </span>
          <h2 className="my-2 max-w-[240px] text-heading-2 font-bold md:text-2xl lg:text-[40px] lg:leading-[53px] lg:mb-6 lg:max-w-full">
            A life dedicated to the service of GOD.
          </h2>
          <p className="text-body-1 text-body-white font-medium font-general-sans mb-4 max-w-2xl lg:text-2xl lg:mb-8 lg:leading-[38px]">
            Pastor Paul Adewunmi was a man of exceptional character while he was
            here with us. He lived a life that glorified GOD in his time on
            earth. This section is dedicated to his memory and to the
            continuation of the ministry he started based on instructions given
            to him by the Holy Spirit.
          </p>
          <div className="lg:flex lg:justify-center lg:items-center">
            <Link href="/">
              <button className="button button--red border-none outline-none m-0 py-3 px-16 font-medium font-aeonik relative inline-block overflow-hidden rounded-btn lg:px-12 lg:py-6 lg:w-auto lg:font-semibold">
                <span className="uppercase text-button text-white font-medium font-general-sans lg:text-btn-1x lg:font-semibold">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
