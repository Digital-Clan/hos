"use client";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await fetch("https://hos-contact.vercel.app/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setShowConfirmationModal(true);
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleModalClose = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <section className="px-5 pb-14 pt-10">
        <div className="container-block">
          <div className="mx-auto max-w-5xl">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-3 lg:space-y-7">
                <div className="flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={(e) => handleFormData(e)}
                    className="placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary lg:text-xl"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleFormData(e)}
                    className="placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary lg:text-xl"
                    required
                  />
                </div>

                <div className="">
                  <select
                    name="subject"
                    className={`
                    ${formData.subject ? "text-primary" : "text-gray-400"}
                    placeholder:gray-400 h-[50px] w-full border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium outline-none focus:border-primary lg:text-xl`}
                    required
                    value={formData.subject}
                    onChange={(e) => handleFormData(e)}
                  >
                    <option value="">Reason for contacting us</option>
                    <option value="I just accepted Christ and I need guidance">
                      I just accepted Christ and I need guidance
                    </option>
                    <option value="I have a prayer request">I have a prayer request</option>
                    <option value="I would like to share my Testimony">I would like to share my Testimony</option>
                    <option value="I want to join Hour of Solution">I want to join Hour of Solution</option>
                    <option value="I have a question">I have a question</option>
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
                    className="placeholder:gray-400 h-[50px] w-full resize-none border-b border-[#E8E8E8] px-2 py-3 font-general-sans text-base font-medium text-primary outline-none focus:border-primary lg:text-xl"
                  />
                </div>
              </div>

              <div className="mt-5 md:mt-8 md:flex md:justify-end">
                <button
                  type="submit"
                  className={`
              text-para-1x w-full rounded-[64px] px-8 py-4 text-center text-white md:w-auto md:px-14 md:text-lg lg:px-16
              ${
                formData.fullname && formData.email && formData.subject && formData.message
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

      <ToastContainer />

      <ConfirmationModal showConfirmationModal={showConfirmationModal} handleModalClose={handleModalClose} />
    </>
  );
}
