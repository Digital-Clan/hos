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
          <h2 className="my-2 text-h2-m font-bold md:text-h2-t lg:mb-6 lg:max-w-full lg:text-h2-d">
            Biography of Pastor Paul Adewunmi
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
          <h2 className="my-2 text-h2-m font-bold md:text-h2-t lg:mb-6 lg:max-w-full lg:text-h2-d">
            An interview with Pastor Paul Adewunmi
          </h2>
        </Memoriam>
      </div>
    </section>
  );
}
