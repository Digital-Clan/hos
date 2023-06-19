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
  event: { id, image, title, liveEvent, scripture, minister, timeStart, timeEnd, venue, date },
}: {
  event: EventCardProps;
}) {
  return (
    <div
      key={id}
      className="flex w-full flex-col items-stretch transition-transform duration-300 ease-in-out hover:translate-y-5 md:flex-row-reverse"
    >
      <div className="h-full w-full md:h-auto md:w-[55%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-tl-[32px] rounded-tr-[32px] object-fill md:rounded-br-[48px] md:rounded-tl-none md:rounded-tr-[48px] lg:h-[450px] lg:rounded-br-[48px] lg:rounded-tr-[48px]"
        />
      </div>
      <div
        className={`p-5 
      ${liveEvent ? "bg-[#F2FDFF]" : "bg-[#FFF2F2]"}
      rounded-bl-[24px] rounded-br-[24px] md:rounded-br-none md:rounded-tl-[24px] lg:w-[45%] lg:rounded-bl-[48px] lg:rounded-br-none lg:rounded-tl-[48px] lg:p-10`}
      >
        {liveEvent && (
          <p className="text-smallest font-general-sans font-medium uppercase text-primary lg:text-xl lg:leading-[28px]">
            Live Event
          </p>
        )}
        <p className="text-heading-4 mb-2 mt-3 font-bold lg:mb-5 lg:text-[28px] lg:leading-[36px]">{title}</p>
        <p className="text-smallest font-general-sans font-medium text-body lg:text-xl lg:leading-[32px]">
          {scripture}
        </p>
        <p className="text-detail font-general-sans font-medium text-black lg:text-xl lg:leading-[32px]">
          Ministering: {minister}
        </p>
        <div className="mt-4 flex flex-col space-y-3 lg:mt-6 lg:space-y-4">
          <div className="flex flex-col space-y-3 xl:flex-row xl:space-x-5 xl:space-y-0">
            <div className="flex items-center space-x-2">
              <TimeIcon />
              <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                {timeStart} - {timeEnd}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon />
              <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
                {date}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon />
            <span className="text-smallest font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
              {venue}
            </span>
          </div>
        </div>
        {liveEvent && (
          <a href="" className="black-link link mt-7 inline-flex items-center space-x-3 lg:mt-10">
            <VideoIcon fillColor="#121212" />
            <span className="text-detail font-general-sans font-medium lg:text-xl">WATCH LIVE</span>
          </a>
        )}
      </div>
    </div>
  );
}
