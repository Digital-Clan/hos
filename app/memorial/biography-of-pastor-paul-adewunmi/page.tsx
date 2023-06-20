/* eslint-disable @next/next/no-img-element */
import { Text } from "@/app/components/Memorial";
import { bio } from "@/app/data/bio";

export default function Biography() {
  return (
    <section className="memorial-page relative px-5 py-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 md:mb-14 lg:mb-20">
          <h2 className="mb-5 text-center text-h1-m font-black text-black md:text-4xl lg:mb-10 lg:text-h1-d">
            Biography of Pastor Paul Adewunmi
          </h2>
          <img
            src="https://res.cloudinary.com/dljsalifp/image/upload/v1687184095/hos/pastor-bio-bg-2_vriare.png"
            alt="Pastor Paul Adewunmi"
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-10">
          {bio.map((item, index) => (
            <Text key={index} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
