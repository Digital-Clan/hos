import { Hero, Mission, Events } from "@/app/components/Home";
import { Memoriam } from "@/app/components/Common";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Memoriam
        showButton={true}
        buttonType="red"
        additionnalClasses="bg-cover bg-memoriam-home-mobile sm:bg-memoriam-home-pc"
        description="Pastor Paul Adewunmi was a man of exceptional 
        character while he was here with us. He lived a 
        life that glorified GOD in his time on earth. This
        section is dedicated to his memory and to the
        continuation of the ministry he started based 
        on instructions given to him by the Holy Spirit."
      >
        <span className="text-detail block font-general-sans lg:text-sm-1x lg:font-semibold lg:text-[#C4C4C4]">
          IN MEMORIAM
        </span>
        <h2 className="text-heading-2 my-2 max-w-[240px] font-bold md:text-2xl lg:mb-6 lg:max-w-full lg:text-[40px] lg:leading-[53px]">
          A life dedicated to the service of GOD.
        </h2>
      </Memoriam>
      <Events />
    </main>
  );
}
