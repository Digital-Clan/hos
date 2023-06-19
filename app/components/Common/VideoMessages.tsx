"use client";
import { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";

interface VideoMessageCardProps {
  item: {
    title: string;
    src: string;
    embedCode: string;
  };
}

interface SwiperButtonsProps {
  prevButtonRef: any;
  nextButtonRef: any;
}

const SwiperButtons = ({ prevButtonRef, nextButtonRef }: SwiperButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className="mt-10 hidden items-center justify-center space-x-5">
      <button ref={prevButtonRef} onClick={() => swiper.slidePrev()}></button>
      <button ref={nextButtonRef} onClick={() => swiper.slideNext()}></button>
    </div>
  );
};

const VideoMessageCard = ({ item: { title, embedCode } }: VideoMessageCardProps) => {
  return (
    <div className="video-message flex w-full flex-col space-y-5">
      <div className="h-[240px] sm:h-[320px]">
        <iframe
          width="100%"
          height="100%"
          className="rounded-[32px]"
          src={`https://www.youtube.com/embed/${embedCode}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h3 className="text-h-3 font-bold">{title}</h3>
    </div>
  );
};

export default function VideoMessages() {
  const videoMessages = [
    {
      id: 1,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
    {
      id: 2,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
    {
      id: 3,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
    {
      id: 4,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
    {
      id: 5,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
    {
      id: 6,
      title: "Daily Prophetic Encounter with Prophet Sunday Iyunade",
      src: "https://www.youtube.com/watch?v=_y_CCiwKzQw",
      embedCode: "ZNxNFzAFBiM",
    },
  ];

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const handlePrev = () => {
    if (prevButtonRef.current) {
      prevButtonRef.current.click();
    }
  };

  const handleNext = () => {
    if (nextButtonRef.current) {
      nextButtonRef.current.click();
    }
  };

  return (
    <section className="px-5 py-10">
      <div className="container-block">
        <div className="mb-5 flex items-center justify-between lg:mb-8">
          <h2 className="text-base font-medium leading-[20px] text-help sm:text-lg md:text-xl lg:text-[32px]">
            Video Messages
          </h2>
          <div className="flex items-center justify-center space-x-3 lg:space-x-3">
            <button onClick={handlePrev} className="button">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="md:hidden">
                <path
                  stroke="#304098"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path
                  stroke="#304098"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 12H5"
                ></path>
              </svg>

              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#304098"
              >
                <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
              </svg>
            </button>
            <button onClick={handleNext} className="button">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="md:hidden">
                <path
                  stroke="#304098"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path
                  stroke="#304098"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H4.75"
                ></path>
              </svg>

              <svg
                className="hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#304098"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={true}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}
          >
            {videoMessages.map((videoMessage) => (
              <SwiperSlide key={videoMessage.id}>
                <VideoMessageCard item={videoMessage} />
              </SwiperSlide>
            ))}

            <SwiperButtons prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
