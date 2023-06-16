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
      venue:
        "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
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
      venue:
        "Kent Hill Park, Milton Keynes Timbold Dr, Kent Hill, Milton Keynes MK7 6BZ",
      liveLink: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686680465/hos/divine-settlement-ministering_lfxaze.png",
    },
  ];

  return (
    <section className="py-14 bg-[#FEFEFE] relative">
      <div className="absolute -top-3 left-0 w-[80px] h-[160px] trumpet-left lg:w-[260px] lg:-top-16 lg:h-[520px]" />
      <div className="absolute -top-3 right-0 w-[80px] h-[160px] trumpet-right lg:w-[260px] lg:h-[500px] lg:-top-12" />
      <div className="mb-5 px-10 text-center relative z-10 sm:w-4/6 sm:mx-auto lg:px-0 lg:w-5/6">
        <h2 className="text-heading-3 font-bold md:text-2xl lg:text-[40px] lg:leading-[53px] lg:w-[764px] lg:mx-auto">
          Join us at one of our events and become a beneficiary of the
          Lord&apos;s blessings.
        </h2>
      </div>

      <div className="container-block relative z-10">
        {events.length > 0 && (
          <>
            <div className="w-full mt-10 px-5 flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:mt-14 sm:space-x-3 md:space-x-8 md:mt-20 lg:flex-col lg:space-y-12 lg:space-x-0">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <div className="mt-10 px-5 flex justify-center items-center lg:justify-end">
              <Link
                href="/events"
                className="w-auto inline-flex items-center justify-center space-x-3 button-link"
              >
                <span className="font-general-sans font-medium text-button lg:text-black lg:text-2xl lg:leading-[32px] lg:font-semibold">
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
