"use client";
import moment from "moment";
import EventCard from "../Common/EventCard";
import { Event } from "@/sanity/lib/types";

type Props = {
  events: Event[];
};

export default function EventsList({ events }: Props) {
  const filteredUpcomingEvents = events.filter((event) => {
    const eventDate = moment(event.startTime);
    const currentDate = moment();
    const diff = eventDate.diff(currentDate, "seconds");
    return diff > 0;
  });

  const filterLiveEvents = events.filter((event) => {
    const eventStartTime = moment(event.startTime);
    const eventEndTime = moment(event.endTime);
    const currentDate = moment();

    const diffStart = eventStartTime.diff(currentDate, "seconds");
    const diffEnd = eventEndTime.diff(currentDate, "seconds");

    return diffStart < 0 && diffEnd > 0;
  });

  return (
    <>
      <section className="px-5 py-12 md:px-8">
        <div className="container-block">
          <div className="mb-20 lg:mb-24">
            <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
              Live Events
            </h2>
            <div className="flex flex-col space-y-10">
              {filterLiveEvents?.length > 0 ? (
                filterLiveEvents.map((event, index: number) => <EventCard key={index} {...event} />)
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
              {filteredUpcomingEvents?.length > 0 ? (
                filteredUpcomingEvents.map((event, index: number) => <EventCard key={index} {...event} />)
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
