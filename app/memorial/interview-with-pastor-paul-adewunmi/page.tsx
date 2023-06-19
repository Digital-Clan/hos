/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { interviewData } from "@/app/data/interview";
import { twMerge } from "tailwind-merge";

function Text({ text, additionnalClasses }: { text: string; additionnalClasses?: string }) {
  return (
    <p
      className={twMerge(
        "font-general-sans text-p1-m font-medium text-body md:text-p1-t lg:text-p1-d",
        additionnalClasses
      )}
    >
      {text}
    </p>
  );
}

function Item({ question, answers }: { question: string; answers: string[] }) {
  return (
    <div className="flex flex-col space-y-3 lg:space-y-5">
      <Text text={question} additionnalClasses="text-blac font-semibold" />
      <div className="flex flex-col space-y-5">
        {answers.map((answer, index) => (
          <Text key={index} text={answer} />
        ))}
      </div>
    </div>
  );
}

export default function Interview() {
  return (
    <section className="px-5 py-12 lg:py-16 xl:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 md:mb-10 lg:mb-14">
          <h2 className="mb-5 text-center text-h1-m font-black text-black md:text-4xl lg:mb-10 lg:text-h1-d">
            Interview with the Pastor
          </h2>
          <img
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1687185291/hos/pastor-interview-bg-2_xsjia9.png"
            alt="Pastor Paul Adewunmi"
            className="w-full"
          />
        </div>

        <div>
          <div className="mb-10 flex flex-col space-y-6 lg:space-y-12">
            <Text text={interviewData.firstIntroduction} />
            <Text text={interviewData.secondIntroduction} />
          </div>

          <div className="flex flex-col space-y-12 lg:space-y-14">
            {interviewData.session.map(({ question, answers }, index) => (
              <Fragment key={index}>
                <Item question={question} answers={answers} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
