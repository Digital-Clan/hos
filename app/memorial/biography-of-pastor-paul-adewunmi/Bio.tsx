/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type Props = {
  image: string;
  biography: PortableTextBlock[];
};

export default function Bio({ image, biography }: Props) {
  return (
    <section className="memorial-page relative px-5 py-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 md:mb-14 lg:mb-20">
          <h2 className="mb-5 text-center text-h1-m font-black text-black md:text-4xl lg:mb-10 lg:text-h1-d">
            Biography of Pastor Paul Adewunmi
          </h2>
          <img src={image} alt="Pastor Paul Adewunmi" className="w-full" />
        </div>

        <div className="biography">
          <PortableText value={biography} />
        </div>
      </div>
    </section>
  );
}
