/* eslint-disable @next/next/no-img-element */
import { CalendarIcon, TimeIcon, LocationIcon, VideoIcon, PlusIcon } from "@/app/icons";

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
    <div key={id} className="flex w-full flex-col items-stretch md:flex-row-reverse">
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
        {liveEvent ? (
          <p className="font-general-sans text-xs-m font-medium uppercase text-primary md:text-xs-t lg:text-xs-d">
            Live Event
          </p>
        ) : (
          <p className="font-general-sans text-xs-m font-medium uppercase text-secondary md:text-xs-t lg:text-xs-d">
            Upcoming Event
          </p>
        )}
        <p className="mb-2 mt-3 text-h4-m font-bold md:text-h4-t lg:mb-5 lg:text-h4-d">{title}</p>
        <p className="font-general-sans text-xs-m font-medium text-body md:text-xs-t lg:text-xs-d">{scripture}</p>
        <p className="font-general-sans text-xs-t font-medium text-black lg:text-xl lg:leading-[32px]">
          Ministering: {minister}
        </p>
        <div className="mt-4 flex flex-col space-y-3 lg:mt-6 lg:space-y-4">
          <div className="flex flex-col space-y-3 xl:flex-row xl:space-x-5 xl:space-y-0">
            <div className="flex items-center space-x-2">
              <TimeIcon />
              <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
                {timeStart} - {timeEnd}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon />
              <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
                {date}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon />
            <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
              {venue}
            </span>
          </div>
        </div>
        {liveEvent ? (
          <a href="" className="black-link link mt-7 inline-flex items-center space-x-3 lg:mt-10">
            <VideoIcon fillColor="#121212" />
            <span className="text-detail font-general-sans font-medium lg:text-xl">WATCH LIVE</span>
          </a>
        ) : (
          <a href="" className="black-link link mt-7 inline-flex items-center space-x-3 lg:mt-10">
            <PlusIcon />
            <span className="font-general-sans text-sm-m font-medium uppercase md:text-sm-t lg:text-xs-d">
              Add to Google Calendar
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
