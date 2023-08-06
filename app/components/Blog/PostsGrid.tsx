/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowIcon } from "@/app/icons";
import { Post } from "@/sanity/lib/types";

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <section className="px-5 py-14 lg:py-20">
      <div className="container-block mx-auto">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-12">
          {posts.map(({ title, slug, coverImage, excerpt }, index) => (
            <Link
              href={`/blog/${slug}`}
              className="cursor-pointer overflow-hidden rounded-[32px] border border-[#D8D8D8] transition-transform duration-300 ease-in-out hover:-translate-y-2"
              key={index}
            >
              <div className="relative h-[240px] w-full md:h-[300px] lg:h-[350px]">
                <img src={coverImage} alt={title} className="h-full w-full object-fill" />
              </div>
              <div className="flex flex-col space-y-4 px-5 py-7 xl:h-[350px] xl:justify-between">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-h4-t font-bold text-black md:text-h3-t">{title}</h2>
                  <p className="text-p1-m text-body md:text-p1-t">{excerpt}</p>
                </div>
                <button className="button-link flex items-center space-x-2">
                  <span className="text-p1-m md:text-p1-t">Read More</span>
                  <ArrowIcon stroke="#121212" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
