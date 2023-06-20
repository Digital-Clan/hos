"use client";
import { useState } from "react";
import { UserIcon } from "@/app/icons";

interface Comment {
  id: number;
  name: string;
  comment: string;
  date: string;
  time: string;
}

export default function PostComments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Ademola Adeniyi",
      comment: "This is a wonderful piece. Thank you for this!",
      date: "May 18, 2023",
      time: "10:43PM",
    },
    {
      id: 2,
      name: "Abdulsamad Ayoade",
      comment: "The best blog post I've read in a while. Thanks for this!",
      date: "May 22, 2023",
      time: "02:23PM",
    },
  ]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    comment: "",
  });

  const handleFormData = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name: formData.fullname,
        comment: formData.comment,
        date: "May 22, 2023",
        time: "02:23PM",
      },
    ]);
    setFormData({
      fullname: "",
      email: "",
      comment: "",
    });
  };

  return (
    <section className="px-5 py-10">
      <div className="container-block mx-auto border-t-2 border-[#EAEAEA] pt-5">
        <h2 className="mb-5 text-h3-m font-bold text-help md:text-h3-t lg:text-h3-d">Comments</h2>
        {comments.length > 0 ? (
          <div className="flex flex-col space-y-10">
            {comments.map(({ id, name, comment, date, time }) => (
              <div className="flex items-start space-x-3" key={id}>
                <div>
                  <UserIcon />
                </div>
                <div>
                  <h3 className="mb-2 text-h4-m font-bold text-black md:text-h4-t lg:text-h4-d">{name}</h3>
                  <p className="mb-2 text-sm text-[#8F8F8F] md:text-sm-t lg:text-sm-d">{comment}</p>
                  <p className="flex items-center space-x-2 text-xs-m text-[#8F8F8F] md:text-xs-t lg:text-xs-d">
                    <span>{date}</span>
                    <span>
                      <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4.5" r="4" fill="#D9D9D9" />
                      </svg>
                    </span>
                    <span>{time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-general-sans text-p1-m font-medium text-[#B2B2B2] md:text-p1-t lg:text-p1-d">
            This blog has no comment yet..
          </p>
        )}

        <h2 className="mb-5 mt-12 text-h3-m font-bold text-help md:text-h3-t lg:text-h3-d">Drop a Comment</h2>
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
              <textarea
                name="comment"
                rows={2}
                cols={100}
                placeholder="Enter your comment here..."
                value={formData.comment}
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
              ${formData.fullname && formData.email && formData.comment ? "bg-primary" : "bg-primary opacity-50"}
              `}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
