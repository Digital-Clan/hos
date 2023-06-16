/* eslint-disable @next/next/no-img-element */
import { ShareIcon, ListenIcon, DownloadIcon, CalendarIcon } from "@/app/icons";

interface AudioMessageCardProps {
  item: {
    id: number;
    title: string;
    minister: string;
    date: string;
    link: string;
    image: string;
  };
}

const AudioMessageCard = ({
  item: { title, minister, date, link, image },
}: AudioMessageCardProps) => {
  return (
    <div className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full flex flex-col items-stretch md:flex-row-reverse md:h-[250px] lg:h-[326px]">
      <div className="w-full h-full md:w-[55%] md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill rounded-tr-[32px] rounded-tl-[32px] md:rounded-none"
        />
      </div>
      <div
        className="px-5 py-8 flex flex-col space-y-5 md:px-8 lg:justify-between
      rounded-bl-[24px] bg-[#F2FDFF] lg:bg-[#F7F7F7] rounded-br-[24px] lg:w-[45%] lg:p-10 md:rounded-none"
      >
        <p className="text-heading-4 font-bold lg:text-[28px] lg:leading-[36px]">
          {title}
        </p>
        <p className="text-detail font-general-sans font-medium text-body lg:text-xl lg:leading-[32px]">
          By: {minister}
        </p>
        <div className="flex space-x-2 items-center">
          <CalendarIcon />
          <span className="text-body-1 font-general-sans font-medium text-black lg:text-base lg:leading-[26px]">
            {date}
          </span>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <button className="flex items-center space-x-2">
            <ShareIcon />
            <span className="text-para-1x">Share</span>
          </button>
          <button className="flex items-center space-x-2">
            <ListenIcon />
            <span className="text-para-1x">Listen</span>
          </button>
          <button className="flex items-center space-x-2">
            <DownloadIcon />
            <span className="text-para-1x">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AudioMessages() {
  const audioMessages = [
    {
      id: 1,
      title: "DAILY PROPHETIC ENCOUNTER WITH PROPHET SUNDAY.",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      link: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686936293/hos/audio-message-img_mhgitb.png",
    },
    {
      id: 2,
      title: "DAILY PROPHETIC ENCOUNTER WITH PROPHET SUNDAY.",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      link: "https://www.youtube.com/watch?v=7X0J5XQw7o8",
      image:
        "https://res.cloudinary.com/dljsalifp/image/upload/v1686936293/hos/audio-message-img_mhgitb.png",
    },
  ];

  return (
    <section className="px-5 py-10">
      <div className="container-block">
        <h2 className="font-medium text-base leading-[20px] mb-5 text-help sm:text-lg md:text-xl lg:text-[32px] lg:mb-8">
          Audio Messages
        </h2>
        <div className="mt-5 flex flex-col space-y-10">
          {audioMessages.map((audioMessage) => (
            <AudioMessageCard key={audioMessage.id} item={audioMessage} />
          ))}
        </div>
      </div>
    </section>
  );
}
