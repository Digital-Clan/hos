import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

export default function Welcome({ message }: { message: PortableTextBlock[] }) {
  return (
    <section className="px-5 py-10 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-3 text-h2-m font-bold text-black md:mb-5 md:text-h2-t lg:text-h2-d">
          Welcome to Hour of Solution
        </h2>

        <div className="font-general-sans text-p1-m font-medium text-body md:text-p1-t lg:text-p1-d">
          <PortableText value={message} />
        </div>
      </div>
    </section>
  );
}
