"use client";
import { TwitterIcon, FacebookIcon } from "@/app/icons";

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

export default function PostShare() {
  return (
    <section className="px-5 py-5">
      <div className="mx-auto max-w-[140px]">
        <p className="mb-5 text-center text-h4-m font-medium uppercase text-body md:text-h4-t lg:text-h4-d">Share</p>
        <div className="flex w-full items-center justify-center space-x-7">
          <TwitterShareButton url="www.google.com" title="testing">
            <TwitterIcon fillColor="#121212" />
          </TwitterShareButton>

          <FacebookShareButton url="www.google.com" title="testing">
            <FacebookIcon fillColor="#121212" />
          </FacebookShareButton>
        </div>
      </div>
    </section>
  );
}
