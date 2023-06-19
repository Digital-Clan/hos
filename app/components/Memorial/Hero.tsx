import { Memoriam } from "../Common";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row">
        <Memoriam
          additionnalClasses="bg-bio bg-cover bg-center pt-40 sm:pt-60 md:py-28 lg:py-36"
          buttonClasses="lg:justify-start"
          containerClasses="lg:justify-center"
          showButton={true}
          buttonType="white"
          buttonLink="/memorial/biography-of-pastor-paul-adewunmi"
          buttonText="Read More"
          description="Pastor Paul Adewunmi was a man of exceptional character while he was here with us. He lived a life that glorified GOD in his time on earth."
        >
          <h2 className="text-heading-2 my-2 font-bold md:text-2xl lg:mb-6 lg:max-w-full lg:text-[40px] lg:leading-[53px]">
            Biography of the Pastor
          </h2>
        </Memoriam>
        <Memoriam
          additionnalClasses="bg-interview bg-cover bg-center pt-40 sm:pt-60 md:py-28 lg:py-36"
          buttonClasses="lg:justify-start"
          containerClasses="lg:justify-center"
          showButton={true}
          buttonType="white"
          buttonLink="/memorial/interview-with-pastor-paul-adewunmi"
          buttonText="Read More"
          description="Pastor Paul Adewunmi was a man of exceptional character while he was here with us. He lived a life that glorified GOD in his time on earth."
        >
          <h2 className="text-heading-2 my-2 font-bold md:text-2xl lg:mb-6 lg:max-w-full lg:text-[40px] lg:leading-[53px]">
            Interview with the Pastor
          </h2>
        </Memoriam>
      </div>
    </section>
  );
}
