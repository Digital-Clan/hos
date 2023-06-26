"use client";
import Link from "next/link";
import moment from "moment";

type Props = {
  title: string;
  date: string;
  author: string;
};

export default function PostHeader({ title, date, author }: Props) {
  return (
    <section className="bg-black px-5 pb-44 pt-16 sm:pb-60 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[350px] text-center text-white md:max-w-2xl">
        <Link href="/blog">
          <span className="rounded-[40px] border-[1.5px] border-[#FEFEFE] px-8 py-2 font-general-sans text-xs-m font-medium uppercase transition-colors duration-200 ease-in-out hover:bg-white hover:text-black md:text-xs-t lg:text-h4-d">
            Blog
          </span>
        </Link>
        <h1 className="my-7 text-h1-m font-black md:my-8 md:text-h1-t lg:my-10 lg:text-h1-d">{title}</h1>
        <div className="flex items-center justify-center space-x-3 text-h4-m font-bold md:text-h4-t lg:text-h4-d lg:font-medium">
          <span>{moment(date).format("MMMM DD, YYYY")}</span>
          <span>•</span>
          <span>{author}</span>
        </div>
      </div>
    </section>
  );
}
