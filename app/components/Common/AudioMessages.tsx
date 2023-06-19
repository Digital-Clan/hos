/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useRef } from "react";
import { ShareIcon, ListenIcon, DownloadIcon, CalendarIcon } from "@/app/icons";
import ShareDialog from "./ShareDialog";

export interface Message {
  link: string;
  title: string;
  minister: string;
}

interface AudioMessageCardProps {
  item: {
    id: number;
    title: string;
    minister: string;
    date: string;
    link: string;
    image: string;
  };
  handleOpenDialog: (message: Message) => void;
}

const AudioMessageCard = ({
  item: { id, title, minister, date, link, image },
  handleOpenDialog,
}: AudioMessageCardProps) => {
  const handleDownload = () => {
    window.open(link, "_blank");
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAudio = (id: number) => {
    if (currentSongIndex === id && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current) {
        setCurrentSongIndex(id);
        audioRef.current.src = link;
        audioRef.current.play();
        setIsPlaying(true);
        audioRef.current.currentTime = currentTime;
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentTime(audioRef.current.currentTime);
      setIsPlaying(false);
    }
  };

  const getPlaybackStatus = (id: number) => {
    if (currentSongIndex === id) {
      return isPlaying ? (
        <button onClick={pauseAudio}>Pause</button>
      ) : (
        <button onClick={() => playAudio(id)}>Listen</button>
      );
    }
    return <button onClick={() => playAudio(id)}>Listen</button>;
  };

  const handleShareMessage = (link: string, title: string, minister: string) => {
    handleOpenDialog({
      link,
      title,
      minister,
    });
  };

  return (
    <div className="flex w-full flex-col items-stretch md:h-[250px] md:flex-row-reverse lg:h-[326px]">
      <div className="h-full w-full md:h-auto md:w-[55%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-tl-[32px] rounded-tr-[32px] object-fill md:rounded-none"
        />
      </div>
      <div
        className="flex flex-col space-y-5 rounded-bl-[24px] rounded-br-[24px] bg-[#F2FDFF] px-5
      py-8 md:rounded-none md:px-8 lg:w-[45%] lg:justify-between lg:bg-[#F7F7F7] lg:p-10"
      >
        <p className="text-h4-m font-bold md:text-h4-t lg:text-h4-d">{title}</p>
        <p className="font-general-sans text-sm-m font-medium text-body md:text-sm-t lg:text-h3-t">By: {minister}</p>
        {/* <div className="border border-red-500">
          <audio ref={audioRef} className="w-full">
            <source src={link} type="audio/mpeg" />
          </audio>
          {getPlaybackStatus(id)}
        </div> */}
        <div className="flex items-center space-x-2">
          <CalendarIcon />
          <span className="font-general-sans text-sm-m font-medium text-black md:text-sm-t">{date}</span>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <button className="flex items-center space-x-2" onClick={() => handleShareMessage(link, title, minister)}>
            <ShareIcon />
            <span className="text-p1-m">Share</span>
          </button>
          <button className="flex items-center space-x-2">
            <ListenIcon />
            <span className="text-p1-m">Listen</span>
          </button>
          <button className="flex items-center space-x-2" onClick={handleDownload}>
            <DownloadIcon />
            <span className="text-p1-m">Download</span>
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
      link: "https://cdn.trendybeatz.com/audio/Burna-Boy-Alone-[TrendyBeatz.com].mp3",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1686936293/hos/audio-message-img_mhgitb.png",
    },
    {
      id: 2,
      title: "DAILY PROPHETIC ENCOUNTER WITH PROPHET SUNDAY.",
      minister: "Prophet Sunday Iyunade",
      date: "Sunday, 22nd April 2023",
      link: "https://cdn.trendybeatz.com/audio/Burna-Boy-I-Be-Common-Person-(TrendyBeatz.com).mp3",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1686936293/hos/audio-message-img_mhgitb.png",
    },
  ];

  const [isShareDialogOpen, setIsShareDialogOpen] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<Message>({
    link: "",
    title: "",
    minister: "",
  });

  const handleOpenDialog = (message: Message) => {
    setIsShareDialogOpen(true);
    setCurrentMessage(message);
  };

  const handleCloseDialog = () => {
    setIsShareDialogOpen(false);
  };

  return (
    <>
      <ShareDialog
        isShareDialogOpen={isShareDialogOpen}
        handleCloseDialog={handleCloseDialog}
        message={currentMessage}
      />

      <section className="px-5 py-10">
        <div className="container-block">
          <h2 className="mb-5 text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:mb-8 lg:text-[32px]">
            Audio Messages
          </h2>
          <div className="mt-5 flex flex-col space-y-10">
            {audioMessages.map((audioMessage) => (
              <AudioMessageCard key={audioMessage.id} item={audioMessage} handleOpenDialog={handleOpenDialog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
