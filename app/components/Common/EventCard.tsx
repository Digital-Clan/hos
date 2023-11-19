/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import moment from "moment";
import { CalendarIcon, TimeIcon, LocationIcon, VideoIcon, PlusIcon } from "@/app/icons";
import { Event } from "@/sanity/lib/types";
import { useSession, useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import EventAlertModal from "./EventAlert";
import LoginAlertModal from "./LoginAlert";

export default function EventCard({ coverImage, title, sermon, minister, startTime, endTime, address, link }: Event) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { scopes: "https://www.googleapis.com/auth/calendar" },
    });
  }

  async function createCalendarEvent() {
    const event = {
      summary: title,
      description: link,
      start: {
        dateTime: new Date(startTime).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: new Date(endTime).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.provider_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowAlertModal(true);
      });
  }

  const handleModalClose = () => {
    setShowAlertModal(false);
  };

  const handleSign = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const checkLiveOrUpcoming = () => {
    const eventStartTime = moment(startTime);
    const eventEndTime = moment(endTime);
    const currentDate = moment();

    const diffStart = eventStartTime.diff(currentDate, "seconds");
    const diffEnd = eventEndTime.diff(currentDate, "seconds");

    if (diffStart < 0 && diffEnd > 0) {
      return true;
    } else if (diffStart > 0) {
      return false;
    }
  };

  // const handlesignout = () => {
  //   supabase.auth.signOut();
  //   toast.success("Signed out successfully");
  // };

  return (
    <>
      <div className="flex w-full flex-col items-stretch md:flex-row-reverse">
        <div className="h-full w-full md:h-auto md:w-[55%] lg:h-[500px]">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full rounded-tl-[32px] rounded-tr-[32px] object-fill md:rounded-br-[48px] md:rounded-tl-none md:rounded-tr-[48px] lg:h-full lg:rounded-br-[48px] lg:rounded-tr-[48px]"
          />
        </div>
        <div
          className={`p-5
      ${checkLiveOrUpcoming() ? "bg-[#F2FDFF]" : "bg-light-red"}
      rounded-bl-[24px] rounded-br-[24px] md:w-[45%] md:rounded-br-none md:rounded-tl-[24px] lg:rounded-bl-[48px] lg:rounded-br-none lg:rounded-tl-[48px] lg:p-10`}
        >
          {checkLiveOrUpcoming() ? (
            <p className="font-general-sans text-xs-m font-medium uppercase text-primary md:text-xs-t lg:text-xs-d">
              Live Event
            </p>
          ) : (
            <p className="font-general-sans text-xs-m font-medium uppercase text-secondary md:text-xs-t lg:text-xs-d">
              Upcoming Event
            </p>
          )}
          <p className="mb-2 mt-3 text-h4-m font-bold md:text-h4-t lg:mb-5 lg:text-h4-d">{title}</p>
          <p className="font-general-sans text-xs-m font-medium text-body md:text-xs-t lg:text-xs-d">{sermon}</p>
          <p className="font-general-sans text-xs-t font-medium text-black lg:text-xl lg:leading-[32px]">
            Ministering: {minister}
          </p>
          <div className="mt-4 flex flex-col space-y-3 lg:mt-6 lg:space-y-4">
            <div className="flex flex-col space-y-3 xl:flex-row xl:space-x-5 xl:space-y-0">
              <div className="flex items-center space-x-2">
                <TimeIcon />
                <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
                  {moment(startTime).format("h:mm A")} - {moment(endTime).format("h:mm A")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon />
                <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
                  {moment(startTime).format("dddd, Do MMMM YYYY")}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <LocationIcon />
              <span className="font-general-sans text-xs-m font-medium text-black md:text-xs-t lg:text-sm-t">
                {address}
              </span>
            </div>
          </div>
          {checkLiveOrUpcoming() ? (
            <a href={link} className="black-link link mt-7 inline-flex items-center space-x-3 lg:mt-10">
              <VideoIcon fillColor="#121212" />
              <span className="font-general-sans text-sm-m font-medium md:text-sm-t lg:text-xs-d">WATCH LIVE</span>
            </a>
          ) : (
            <button
              onClick={session ? createCalendarEvent : handleSign}
              className="black-link link mt-7 inline-flex items-center space-x-3 lg:mt-10"
            >
              <PlusIcon />
              <span className="font-general-sans text-sm-m font-medium uppercase md:text-sm-t lg:text-xs-d">
                Add to Google Calendar
              </span>
            </button>
          )}
        </div>
      </div>

      {/* <button onClick={handlesignout}>Sign out</button> */}

      <EventAlertModal showAlertModal={showAlertModal} handleModalClose={handleModalClose} />
      <LoginAlertModal
        showAlertModal={showLoginModal}
        handleModalClose={googleSignIn}
        handleCloseLoginModal={handleCloseLoginModal}
      />
    </>
  );
}
