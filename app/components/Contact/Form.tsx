"use client";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function Form() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormData = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    setShowConfirmationModal(true);
    setFormData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleModalClose = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <section className="px-5 pt-10 pb-14">
        <div className="container-block">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3 lg:space-y-7">
                <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-5">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={(e) => handleFormData(e)}
                    className="w-full h-[50px] py-3 px-2 text-base text-primary placeholder:gray-400 font-general-sans font-medium border-b border-[#E8E8E8] focus:border-primary outline-none lg:text-xl"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleFormData(e)}
                    className="w-full h-[50px] py-3 px-2 text-base text-primary placeholder:gray-400 border-b font-general-sans font-medium border-[#E8E8E8] focus:border-primary outline-none lg:text-xl"
                    required
                  />
                </div>

                <div className="">
                  <select
                    name="subject"
                    className={`
                    ${formData.subject ? "text-primary" : "text-gray-400"}
                    w-full h-[50px] py-3 px-2 text-base placeholder:gray-400 border-b font-general-sans font-medium border-[#E8E8E8] focus:border-primary outline-none lg:text-xl`}
                    required
                    value={formData.subject}
                    onChange={(e) => handleFormData(e)}
                  >
                    <option value="">Reason for contacting us</option>
                    <option value="Reason1">Reason 1</option>
                    <option value="Reason2">Reason 2</option>
                    <option value="Reason3">Reason 3</option>
                  </select>
                </div>

                <div className="">
                  <textarea
                    name="message"
                    rows={2}
                    cols={100}
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={(e) => handleFormData(e)}
                    className="w-full h-[50px] resize-none py-3 px-2 text-base text-primary placeholder:gray-400 border-b font-general-sans font-medium border-[#E8E8E8] focus:border-primary outline-none lg:text-xl"
                  />
                </div>
              </div>

              <div className="mt-5 md:flex md:justify-end md:mt-8">
                <button
                  type="submit"
                  className={`
              w-full rounded-[64px] px-8 py-4 text-center text-white text-para-1x md:w-auto md:px-14 md:text-lg lg:px-16
              ${
                formData.fullname &&
                formData.email &&
                formData.subject &&
                formData.message
                  ? "bg-primary"
                  : "bg-primary opacity-50"
              }
              `}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ConfirmationModal showConfirmationModal={showConfirmationModal} handleModalClose={handleModalClose} />
    </>
  );
}
