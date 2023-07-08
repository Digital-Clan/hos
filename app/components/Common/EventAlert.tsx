import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  showAlertModal: boolean;
  handleModalClose: () => void;
}

export default function EventAlertModal({ showAlertModal, handleModalClose }: Props) {
  return (
    <>
      <Transition appear show={showAlertModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModalClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-5 py-10 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center">
                    <svg
                      width="113"
                      height="112"
                      viewBox="0 0 113 112"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden lg:block"
                    >
                      <path
                        d="M56.5 9.33398C30.7867 9.33398 9.83337 30.2873 9.83337 56.0006C9.83337 81.714 30.7867 102.667 56.5 102.667C82.2134 102.667 103.167 81.714 103.167 56.0006C103.167 30.2873 82.2134 9.33398 56.5 9.33398ZM78.8067 45.2673L52.3467 71.7273C51.6934 72.3806 50.8067 72.754 49.8734 72.754C48.94 72.754 48.0534 72.3806 47.4 71.7273L34.1934 58.5206C32.84 57.1673 32.84 54.9273 34.1934 53.574C35.5467 52.2206 37.7867 52.2206 39.14 53.574L49.8734 64.3073L73.86 40.3207C75.2134 38.9673 77.4534 38.9673 78.8067 40.3207C80.16 41.674 80.16 43.8673 78.8067 45.2673Z"
                        fill="#304098"
                      />
                    </svg>

                    <svg
                      width="81"
                      height="80"
                      viewBox="0 0 81 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:hidden"
                    >
                      <path
                        d="M40.5 6.66602C22.1333 6.66602 7.16666 21.6327 7.16666 39.9994C7.16666 58.366 22.1333 73.3327 40.5 73.3327C58.8667 73.3327 73.8333 58.366 73.8333 39.9994C73.8333 21.6327 58.8667 6.66602 40.5 6.66602ZM56.4333 32.3327L37.5333 51.2327C37.0667 51.6994 36.4333 51.966 35.7667 51.966C35.1 51.966 34.4667 51.6994 34 51.2327L24.5667 41.7994C23.6 40.8327 23.6 39.2327 24.5667 38.266C25.5333 37.2993 27.1333 37.2993 28.1 38.266L35.7667 45.9327L52.9 28.7994C53.8667 27.8327 55.4667 27.8327 56.4333 28.7994C57.4 29.766 57.4 31.3327 56.4333 32.3327Z"
                        fill="#304098"
                      />
                    </svg>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-h3 md:text-xl">Event Added!</p>
                    <p className="mb-7 mt-2 text-sm leading-[21px] text-[#B5B5B5] md:text-base">
                      Your event has been added to your calendar.
                    </p>
                    <button
                      onClick={handleModalClose}
                      className="text-para-1x w-full rounded-[64px] bg-[#E6E9FF] px-8 py-3 text-center text-primary md:w-auto md:px-14 md:text-lg lg:px-16"
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
