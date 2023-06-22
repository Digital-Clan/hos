/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import type { SwiperButtonsProps } from "../Common/VideoMessages";

function Card({ name, bio, image }: { name: string; bio: string; image: string }) {
  return (
    <div className="team-card relative overflow-hidden">
      <img className="h-full w-full object-cover transition-all duration-300 ease-in-out" src={image} alt="" />

      <div className="member absolute left-0 right-0 top-0 mx-auto flex h-full w-full max-w-[350px] flex-col items-center justify-center space-y-3 bg-transparent text-center text-white transition-all duration-200 ease-in-out">
        <h3 className="font-general-sans text-h4-d font-semibold">{name}</h3>
        <p className="font-general-sans text-lg font-medium">{bio}</p>
      </div>
    </div>
  );
}

function SwiperButtons({ prevButtonRef, nextButtonRef }: SwiperButtonsProps): JSX.Element {
  const swiper = useSwiper();
  return (
    <div className="mt-10 hidden items-center justify-center space-x-5">
      <button ref={prevButtonRef} onClick={() => swiper.slidePrev()}></button>
      <button ref={nextButtonRef} onClick={() => swiper.slideNext()}></button>
    </div>
  );
}

export default function Team() {
  const team = [
    {
      id: 1,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
    {
      id: 2,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
    {
      id: 3,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
    {
      id: 4,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
    {
      id: 5,
      name: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
    {
      id: 6,
      name: "Divine Salem",
      bio: "Lorem ipsum dolor sit amet, consectetur adipscising elit, dolor sit amet lorem ipsum, ipsum dolor sit amet, lorem ipsum dolor sit.",
      image: "https://res.cloudinary.com/dljsalifp/image/upload/v1687404117/hos/pastor-card-img_spbljd.png",
    },
  ];

  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="px-5 py-10 md:py-16 lg:py-20">
      <div className="container-block mx-auto">
        <div className="text-center lg:mb-8">
          <h2 className="mb-1 text-h3-m font-bold md:text-h3-t lg:text-h3-d">Meet Our Team</h2>
          <p className="mb-2 block font-general-sans text-xs-m font-medium text-secondary md:text-xs-t lg:mb-0 lg:text-xs-d">
            Committee Members
          </p>
          <div className="mb-8 mt-4 flex items-center justify-center space-x-3 lg:hidden">
            <button onClick={handlePrev} className="button">
              <svg
                className={currentSlide === 0 ? "opacity-30" : ""}
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 0C9.48 0 0.5 8.98 0.5 20C0.5 31.02 9.48 40 20.5 40C31.52 40 40.5 31.02 40.5 20C40.5 8.98 31.52 0 20.5 0ZM24.08 26C24.66 26.58 24.66 27.54 24.08 28.12C23.78 28.42 23.4 28.56 23.02 28.56C22.64 28.56 22.26 28.42 21.96 28.12L14.9 21.06C14.32 20.48 14.32 19.52 14.9 18.94L21.96 11.88C22.54 11.3 23.5 11.3 24.08 11.88C24.66 12.46 24.66 13.42 24.08 14L18.08 20L24.08 26Z"
                  fill="#BDBDBD"
                />
              </svg>
            </button>
            <button onClick={handleNext} className="button">
              <svg
                className={currentSlide === team.length - 1 ? "opacity-30" : ""}
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 0C31.52 0 40.5 8.98 40.5 20C40.5 31.02 31.52 40 20.5 40C9.48 40 0.5 31.02 0.5 20C0.5 8.98 9.48 0 20.5 0ZM16.92 26C16.34 26.58 16.34 27.54 16.92 28.12C17.22 28.42 17.6 28.56 17.98 28.56C18.36 28.56 18.74 28.42 19.04 28.12L26.1 21.06C26.68 20.48 26.68 19.52 26.1 18.94L19.04 11.88C18.46 11.3 17.5 11.3 16.92 11.88C16.34 12.46 16.34 13.42 16.92 14L22.92 20L16.92 26Z"
                  fill="#BDBDBD"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden grid-cols-3 gap-5 lg:grid">
          {team.map((member) => (
            <Card key={member.id} {...member} />
          ))}
        </div>
        <div className="lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={true}
            modules={[Navigation]}
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
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex);
            }}
          >
            {team.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="relative">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={`${member.name} profile picture`}
                  />
                  <h3
                    style={{
                      background: "transparent",
                      backgroundBlendMode: "MULTIPLY",
                      backdropFilter: "blur(3px)",
                    }}
                    className="absolute bottom-0 left-0 right-0 w-full p-5 text-h2-m text-white"
                  >
                    {member.name}
                  </h3>
                </div>
                <p className="mt-5 font-general-sans font-medium text-body">{member.bio}</p>
              </SwiperSlide>
            ))}

            <SwiperButtons prevButtonRef={prevButtonRef} nextButtonRef={nextButtonRef} />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
