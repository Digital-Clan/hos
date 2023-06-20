"use client";
import { TwitterIcon, FacebookIcon } from "@/app/icons";

import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function PostShare() {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section className="px-5 py-5 lg:py-10">
      <div className="mx-auto max-w-[140px]">
        <p className="mb-5 text-center text-h4-m font-medium uppercase text-body md:text-h4-t lg:text-h4-d">Share</p>
        <div className="flex w-full items-center justify-center space-x-7">
          <TwitterShareButton
            url={url}
            title="testing"
            className="transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-150"
          >
            <TwitterIcon fillColor="#121212" />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            title="testing"
            className="transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-150"
          >
            <FacebookIcon fillColor="#121212" />
          </FacebookShareButton>
        </div>
      </div>
    </section>
  );
}
