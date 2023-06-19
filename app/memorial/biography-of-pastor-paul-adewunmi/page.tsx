/* eslint-disable @next/next/no-img-element */
import { Text } from "@/app/components/Memorial";

export default function Biography() {
  return (
    <section className="px-5 py-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 lg:mb-10">
          <h2 className="mb-5 text-center text-h1-m font-black text-black md:text-4xl lg:mb-10 lg:text-h1-d">
            Biography of the Pastor
          </h2>
          <img
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1687184095/hos/pastor-bio-bg-2_vriare.png"
            alt="Pastor Paul Adewunmi"
            className="w-full"
          />
        </div>

        <div>
          <Text
            text="
            Lorem ipsum dolor sit amet consectetur adipscising elit, dolor sit amet dolor sit amet dolor sit amet
            consectetur dolor sit amet lorem ipsum, amet consectetur dolor sit amet lorem sit. ipsum sit amet
            consectetur adipscising. Lorem ipsum dolor sit amet consectetur adipscising elit, dolor sit amet dolor sit
            amet dolor sit amet consectetur dolor sit amet lorem ipsum, amet. Lorem ipsum dolor sit amet consectetur
            adipscising elit, dolor sit amet dolor sit amet dolor sit amet consectetur dolor sit amet lorem ipsum, amet
            consectetur dolor sit amet lorem sit. ipsum sit amet consectetur adipscising. Lorem ipsum dolor sit amet
            consectetur adipscising elit, dolor sit amet dolor sit amet dolor sit amet consectetur dolor sit amet lorem
            ipsum, amet."
          />

          <h2 className="mb-3 mt-8 text-h3-m font-bold text-[#4C4C4C] md:text-h3-t lg:mt-10 lg:text-h3-d">
            Lorem ipsum dolor sit amet?
          </h2>

          <Text
            text="
            Lorem ipsum dolor sit amet consectetur adipscising elit, dolor sit amet dolor sit amet dolor sit amet
            consectetur dolor sit amet lorem ipsum, amet consectetur dolor sit amet lorem sit. ipsum sit amet
            consectetur adipscising. Lorem ipsum dolor sit amet consectetur adipscising elit, dolor sit amet dolor sit
            amet dolor sit amet consectetur dolor sit amet lorem ipsum, amet. Lorem ipsum dolor sit amet consectetur
            adipscising elit, dolor sit amet dolor sit amet dolor sit amet consectetur dolor sit amet lorem ipsum, amet
            consectetur dolor sit amet lorem sit. ipsum sit amet consectetur adipscising. Lorem ipsum dolor sit amet
            consectetur adipscising elit, dolor sit amet dolor sit amet dolor sit amet consectetur dolor sit amet lorem
            ipsum, amet."
          />
        </div>
      </div>
    </section>
  );
}
