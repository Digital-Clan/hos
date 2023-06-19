"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import type { Message } from "./AudioMessages";

export default function ShareDialog({
  isShareDialogOpen,
  handleCloseDialog,
  message,
}: {
  isShareDialogOpen: boolean;
  handleCloseDialog: () => void;
  message: Message;
}) {
  return (
    <>
      <Transition appear show={isShareDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-3"
                  >
                    Share this message
                  </Dialog.Title>
                  <div className="flex items-center space-x-3">
                    <EmailShareButton
                      url={message.link}
                      subject={message.title}
                      body={message.link}
                    >
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <FacebookShareButton
                      url={message.link}
                      quote={message.title}
                    >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={message.link}
                      title={message.title}
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <TelegramShareButton
                      url={message.link}
                      title={message.title}
                    >
                      <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>

                    <LinkedinShareButton
                      url={message.link}
                      title={message.title}
                      source={message.link}
                    >
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>

                    <WhatsappShareButton
                      url={message.link}
                      title={message.title}
                    >
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-8 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleCloseDialog}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
