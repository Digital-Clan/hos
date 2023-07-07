/* eslint-disable @next/next/no-img-element */
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function Visioner({ visioner }: { visioner: PortableTextBlock[] }) {
  return (
    <section className="about-visioner relative bg-light-red px-5 py-10 md:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-5 md:mb-7 lg:mb-10">
          <img
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1687402808/hos/about-pastor-img_h7cx4i.png"
            alt="Pastor Paul Adewunmi"
          />
        </div>
        <div className="text-center">
          <p className="mb-2 block font-general-sans text-xs-m font-medium uppercase text-secondary md:text-xs-t lg:mb-0 lg:text-xs-d lg:font-semibold">
            Our Visioner
          </p>
          <h2 className="mb-3 text-h3-m font-bold md:text-h3-t lg:mb-5 lg:text-h3-d">Pastor Paul Adewunmi</h2>
          <div className="mb-5 flex flex-col space-y-3 font-general-sans text-p1-m font-medium text-body md:mb-8 md:text-p1-t lg:mb-12 lg:text-p1-d">
            <PortableText value={visioner} />
          </div>
          <Link href="/memorial">
            <button className="button button--red font-aeonik relative m-0 inline-block overflow-hidden rounded-btn border border-secondary px-16 py-3 font-medium outline-none lg:w-auto lg:px-12 lg:py-6 lg:font-semibold">
              <span className="font-general-sans text-bt-m font-medium uppercase text-white lg:text-bt-d lg:font-semibold">
                Learn More
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
