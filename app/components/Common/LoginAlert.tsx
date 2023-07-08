import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  showAlertModal: boolean;
  handleModalClose: () => void;
}

export default function LoginAlertModal({ showAlertModal, handleModalClose }: Props) {
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
                  <div className="text-center">
                    <p className="text-h3 md:text-xl">Sign In</p>
                    <p className="mb-7 mt-2 text-sm leading-[21px] text-[#B5B5B5] md:text-base">
                      To add events to your calendar, you need to sign in first.
                    </p>
                    <button
                      onClick={handleModalClose}
                      className="text-para-1x w-full rounded-[64px] bg-[#E6E9FF] px-8 py-3 text-center text-primary md:w-auto md:px-14 md:text-lg lg:px-16"
                    >
                      Sign In
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
