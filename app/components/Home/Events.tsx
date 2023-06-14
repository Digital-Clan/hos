/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  VideoIcon,
  TimeIcon,
  CalendarIcon,
  LocationIcon,
  ArrowIcon,
} from "@/app/icons";

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
                <div
                  key={event.id}
                  className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full flex flex-col items-stretch lg:flex-row-reverse"
                >
                  <div className="w-full h-[240px] lg:w-[55%] lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-fill lg:h-[450px] rounded-tr-[32px] rounded-tl-[32px] lg:rounded-tr-[48px] lg:rounded-tl-none lg:rounded-br-[48px]"
                    />
                  </div>
                  <div className="p-5 bg-[#F2FDFF] rounded-bl-[24px] rounded-br-[24px] lg:w-[45%] lg:p-10 lg:rounded-br-none lg:rounded-tl-[48px] lg:rounded-bt-[48px]">
                    {event.liveEvent && (
                      <p className="text-primary font-medium uppercase text-smallest font-general-sans lg:text-xl lg:leading-[28px]">
                        Live Event
                      </p>
                    )}
                    <p className="mt-3 mb-2 text-heading-4 font-bold lg:text-[28px] lg:leading-[36px] lg:mb-5">
                      {event.title}
                    </p>
                    <p className="text-smallest font-general-sans font-medium text-body lg:text-xl lg:leading-[32px]">
                      {event.scripture}
                    </p>
                    <p className="text-detail font-general-sans font-medium text-black lg:text-xl lg:leading-[32px]">
                      Ministering: {event.minister}
                    </p>
                    <div className="flex flex-col space-y-3 mt-4 lg:mt-6 lg:space-y-4">
                      <div className="flex flex-col space-y-3 xl:flex-row xl:space-y-0 xl:space-x-5">
                        <div className="flex space-x-2 items-center">
                          <TimeIcon />
                          <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                            {event.timeStart} - {event.timeEnd}
                          </span>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <CalendarIcon />
                          <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                            {event.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <LocationIcon />
                        <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                    <a
                      href=""
                      className="mt-7 inline-flex items-center space-x-3 black-link link lg:mt-10"
                    >
                      <VideoIcon fillColor="#121212" />
                      <span className="text-detail font-general-sans font-medium lg:text-xl">
                        WATCH LIVE
                      </span>
                    </a>
                  </div>
                </div>
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
