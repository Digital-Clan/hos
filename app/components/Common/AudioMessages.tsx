/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { ShareIcon, ListenIcon, DownloadIcon, CalendarIcon } from "@/app/icons";
import ShareDialog from "./ShareDialog";
import { Audio } from "@/sanity/lib/types";

type Props = {
  audioMessages: Audio[];
};
export interface Message {
  link: string;
  title: string;
  minister: string;
}

interface AudioMessageCardProps {
  item: Audio;
  index: number;
  handleOpenDialog: (message: Message) => void;
}

const AudioMessageCard = ({
  index,
  item: { title, minister, link, coverImage, date },
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
    audioRef.current?.play();

    if (currentSongIndex) {
      setCurrentSongIndex(null);
    } else {
      setCurrentSongIndex(id);
    }

    // setCurrentSongIndex(id);

    // if (currentSongIndex === id && isPlaying) {
    //   if (audioRef.current) {
    //     audioRef.current.pause();
    //     setIsPlaying(false);
    //   }
    // } else {
    //   if (audioRef.current) {
    //     setCurrentSongIndex(id);
    //     audioRef.current.src = link;
    //     audioRef.current.play();
    //     setIsPlaying(true);
    //     audioRef.current.currentTime = currentTime;
    //   }
    // }
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
    setCurrentSongIndex(null);

    // if (audioRef.current) {
    //   setCurrentTime(audioRef.current.currentTime);
    //   setIsPlaying(false);
    // }
  };

  // const getPlaybackStatus = (id: number) => {
  //   if (currentSongIndex === id) {
  //     return isPlaying ? (
  //       <button onClick={pauseAudio}>Pause</button>
  //     ) : (
  //       <button onClick={() => playAudio(id)}>Listen</button>
  //     );
  //   }
  //   return <button onClick={() => playAudio(id)}>Listen</button>;
  // };

  const handleShareMessage = (link: string, title: string, minister: string) => {
    handleOpenDialog({
      link,
      title,
      minister,
    });
  };

  useEffect(() => {
    console.log(currentSongIndex);
  }, [currentSongIndex]);

  return (
    <div className="flex w-full flex-col items-stretch md:h-[250px] md:flex-row-reverse lg:h-[326px]">
      <div className="h-full w-full md:h-auto md:w-[55%]">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full rounded-tl-[32px] rounded-tr-[32px] object-fill md:rounded-none md:object-cover"
        />
      </div>
      <div
        className="flex flex-col space-y-5 rounded-bl-[24px] rounded-br-[24px] bg-[#F2FDFF] px-5
      py-8 md:rounded-none md:px-8 lg:w-[45%] lg:justify-between lg:bg-[#F7F7F7] lg:p-10"
      >
        <p className="text-h4-m font-bold md:text-h4-t lg:text-h4-d">{title}</p>
        <p className="font-general-sans text-sm-m font-medium text-body md:text-sm-t lg:text-h3-t">By: {minister}</p>
        <div className="border border-red-500">
          <audio ref={audioRef} className="w-full" controls>
            <source src={link} type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon />
          <span className="font-general-sans text-sm-m font-medium text-black md:text-sm-t">
            {moment(date).format("dddd, Do MMMM YYYY")}
          </span>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <button className="flex items-center space-x-2" onClick={() => handleShareMessage(link, title, minister)}>
            <ShareIcon />
            <span className="text-p1-m">Share</span>
          </button>
          {currentSongIndex === index ? (
            <button onClick={pauseAudio} className="flex items-center space-x-2">
              <ListenIcon />
              <span className="text-p1-m">Pause</span>
            </button>
          ) : (
            <button onClick={() => playAudio(index)} className="flex items-center space-x-2">
              <ListenIcon />
              <span className="text-p1-m">Listen</span>
            </button>
          )}
          <button className="flex items-center space-x-2" onClick={handleDownload}>
            <DownloadIcon />
            <span className="text-p1-m">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AudioMessages({ audioMessages }: Props) {
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
            {audioMessages.map((audioMessage, index) => (
              <AudioMessageCard key={index} index={index} item={audioMessage} handleOpenDialog={handleOpenDialog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
