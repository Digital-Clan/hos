/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EventCard } from "../Common";
import { ArrowIcon } from "@/app/icons";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "DIVINE SETTLEMENT",
      liveEvent: true,
      scripture: "1 Peter 5:10",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      timeStart: "10:00 AM",
      timeEnd: "06:00 PM",
      venue: "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
    {
      id: 2,
      title: "DIVINE SETTLEMENT",
      liveEvent: true,
      scripture: "1 Peter 5:10",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      timeStart: "10:00 AM",
      timeEnd: "06:00 PM",
      venue: "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
  ];

  return (
    <section className="relative bg-[#FEFEFE] py-14">
      <div className="trumpet-left absolute -top-3 left-0 h-[160px] w-[80px] lg:-top-16 lg:h-[520px] lg:w-[260px]" />
      <div className="trumpet-right absolute -top-3 right-0 h-[160px] w-[80px] lg:-top-12 lg:h-[500px] lg:w-[260px]" />
      <div className="relative z-10 mb-5 px-10 text-center sm:mx-auto sm:w-4/6 lg:w-5/6 lg:px-0">
        <h2 className="text-heading-3 font-bold md:text-2xl lg:mx-auto lg:w-[764px] lg:text-[40px] lg:leading-[53px]">
          Join us at one of our events and become a beneficiary of the Lord&apos;s blessings.
        </h2>
      </div>

      <div className="container-block relative z-10">
        {events.length > 0 && (
          <>
            <div className="mt-10 flex w-full flex-col space-y-10 px-5 sm:mt-14 sm:flex-row sm:space-x-3 sm:space-y-0 md:mt-20 md:space-x-8 lg:flex-col lg:space-x-0 lg:space-y-12">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center px-5 lg:justify-end">
              <Link href="/events" className="button-link inline-flex w-auto items-center justify-center space-x-3">
                <span className="text-button font-general-sans font-medium lg:text-2xl lg:font-semibold lg:leading-[32px] lg:text-black">
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
