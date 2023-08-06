/* eslint-disable @next/next/no-img-element */
"use client";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type Props = {
  image: string;
  content: PortableTextBlock[];
};

export default function PostBody({ image, content }: Props) {
  return (
    <section className="-mt-32 px-5 pb-10 sm:-mt-44">
      <div className="mx-auto max-w-[1037px]">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            borderRadius: "32px",
            backgroundPosition: "top center",
          }}
          className="mb-8 h-[250px] w-full sm:h-[400px] md:h-[460px] lg:h-[490px]"
        ></div>

        <div className="blogpost text-red-500">
          <PortableText value={content} />
        </div>
      </div>
    </section>
  );
}
