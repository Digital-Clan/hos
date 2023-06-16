/* eslint-disable @next/next/no-img-element */
import { CalendarIcon, TimeIcon, LocationIcon, VideoIcon } from "@/app/icons";

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  liveEvent: boolean;
  scripture: string;
  minister: string;
  timeStart: string;
  timeEnd: string;
  venue: string;
  date: string;
}

export default function EventCard({
  event: {
    id,
    image,
    title,
    liveEvent,
    scripture,
    minister,
    timeStart,
    timeEnd,
    venue,
    date,
  },
}: {
  event: EventCardProps;
}) {
  return (
    <div
      key={id}
      className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full flex flex-col items-stretch md:flex-row-reverse"
    >
      <div className="w-full h-full md:w-[55%] md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill lg:h-[450px] rounded-tr-[32px] rounded-tl-[32px] md:rounded-tr-[48px] md:rounded-tl-none md:rounded-br-[48px] lg:rounded-tr-[48px] lg:rounded-br-[48px]"
        />
      </div>
      <div
        className={`p-5 
      ${liveEvent ? "bg-[#F2FDFF]" : "bg-[#FFF2F2]"}
      rounded-bl-[24px] rounded-br-[24px] md:rounded-br-none md:rounded-tl-[24px] lg:w-[45%] lg:p-10 lg:rounded-br-none lg:rounded-tl-[48px] lg:rounded-bl-[48px]`}
      >
        {liveEvent && (
          <p className="text-primary font-medium uppercase text-smallest font-general-sans lg:text-xl lg:leading-[28px]">
            Live Event
          </p>
        )}
        <p className="mt-3 mb-2 text-heading-4 font-bold lg:text-[28px] lg:leading-[36px] lg:mb-5">
          {title}
        </p>
        <p className="text-smallest font-general-sans font-medium text-body lg:text-xl lg:leading-[32px]">
          {scripture}
        </p>
        <p className="text-detail font-general-sans font-medium text-black lg:text-xl lg:leading-[32px]">
          Ministering: {minister}
        </p>
        <div className="flex flex-col space-y-3 mt-4 lg:mt-6 lg:space-y-4">
          <div className="flex flex-col space-y-3 xl:flex-row xl:space-y-0 xl:space-x-5">
            <div className="flex space-x-2 items-center">
              <TimeIcon />
              <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                {timeStart} - {timeEnd}
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <CalendarIcon />
              <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                {date}
              </span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <LocationIcon />
            <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
              {venue}
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
  );
}
