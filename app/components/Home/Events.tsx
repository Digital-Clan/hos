/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EventCard } from "../Common";
import { ArrowIcon } from "@/app/icons";
import { Event } from "@/sanity/lib/types";

type Props = {
  events: Event[];
};

export default function Events({ events }: Props) {
  return (
    <section className="relative bg-[#FEFEFE] py-14">
      <div className="trumpet-left absolute -top-3 left-0 h-[160px] w-[80px] lg:-top-16 lg:h-[520px] lg:w-[260px]" />
      <div className="trumpet-right absolute -top-3 right-0 h-[160px] w-[80px] lg:-top-12 lg:h-[500px] lg:w-[260px]" />
      <div className="relative z-10 mb-5 px-10 text-center sm:mx-auto sm:w-4/6 lg:w-5/6 lg:px-0">
        <h2 className="text-h3-m font-bold md:text-h3-t lg:mx-auto lg:w-[764px] lg:text-h3-d">
          Join us at one of our events and become a beneficiary of the Lord&apos;s blessings.
        </h2>
      </div>

      <div className="container-block relative z-10">
        {events.length > 0 && (
          <>
            <div className="mt-10 flex w-full flex-col space-y-10 px-5 sm:mt-14 md:mt-20 lg:space-y-12">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center px-5 lg:justify-end">
              <Link href="/events" className="button-link inline-flex w-auto items-center justify-center space-x-3">
                <span className="font-general-sans text-p1-m font-medium md:text-p1-t lg:text-p1-d lg:font-semibold lg:text-black">
                  View all Events
                </span>
                <ArrowIcon />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
