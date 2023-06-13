/* eslint-disable @next/next/no-img-element */
import { VideoIcon, TimeIcon, CalendarIcon, LocationIcon } from "@/app/icons";

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
      <div className="absolute -top-3 left-0 w-[80px] h-[160px] trumpet-left" />
      <div className="absolute -top-3 right-0 w-[80px] h-[160px] trumpet-right" />
      <div className="mb-5 px-10 text-center relative z-10">
        <h2 className="text-heading-3 font-bold">
          Join us at one of our events and become a beneficiary of the
          Lord&apos;s blessings.
        </h2>
      </div>

      {events.length > 0 && (
        <div className="mt-10 px-5 flex flex-col space-y-10">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col items-stretch">
              <div className="w-full h-[240px] rounded-tr-[32px] rounded-tl-[32px]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="p-5 bg-[#F2FDFF] rounded-bl-[24px] rounded-br-[24px]">
                {event.liveEvent && (
                  <p className="text-primary font-medium uppercase text-smallest font-general-sans">
                    Live Event
                  </p>
                )}
                <p className="mt-3 mb-2 text-heading-4 font-bold">
                  {event.title}
                </p>
                <p className="text-smallest font-general-sans font-medium text-body">
                  {event.scripture}
                </p>
                <p className="text-detail font-general-sans font-medium text-black mt-1">
                  Ministering: {event.minister}
                </p>
                <div className="flex flex-col space-y-3 mt-4">
                  <div className="flex space-x-2 items-center">
                    <TimeIcon />
                    <span className="text-smallest font-general-sans font-medium text-black">
                      {event.timeStart} - {event.timeEnd}
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <CalendarIcon />
                    <span className="text-smallest font-general-sans font-medium text-black">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <LocationIcon />
                    <span className="text-smallest font-general-sans font-medium text-black">
                      {event.venue}
                    </span>
                  </div>
                </div>
                <a href="" className="mt-7 w-full flex items-center space-x-3 black-link link">
                  <VideoIcon fill="#121212" />
                  <span className="text-detail font-general-sans font-medium">
                    WATCH LIVE
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
