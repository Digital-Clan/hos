"use client";
import EventCard from "../Common/EventCard";
import { Event } from "@/sanity/lib/types";

type Props = {
  liveEvents: Event[];
  upcomingEvents: Event[];
};

export default function EventsList({ liveEvents, upcomingEvents }: Props) {
  console.log(upcomingEvents);

  return (
    <>
      <section className="px-5 py-12 md:px-8">
        <div className="container-block">
          <div className="mb-20 lg:mb-24">
            <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
              Live Events
            </h2>
            <div className="flex flex-col space-y-10">
              {liveEvents?.length > 0 ? (
                liveEvents.map((event, index: number) => <EventCard key={index} {...event} />)
              ) : (
                <p className="py-5 text-center text-p1-m text-body md:text-p1-t lg:text-p1-d">No live events found</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
              Upcoming Events
            </h2>
            <div className="flex flex-col space-y-10">
              {upcomingEvents?.length > 0 ? (
                upcomingEvents.map((event, index: number) => <EventCard key={index} {...event} />)
              ) : (
                <p className="py-5 text-center text-p1-m text-body md:text-p1-t lg:text-p1-d">
                  No upcoming events found
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
