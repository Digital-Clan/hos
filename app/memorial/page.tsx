import { Hero } from "../components/Memorial";
import { Memoriam, AudioMessages, VideoMessages } from "../components/Common";

export default function Memorial() {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <Memoriam
        showButton={false}
        additionnalClasses="pt-40 pb-12 bg-cover bg-memoriam-home-m sm:bg-memoriam-home-d"
        description="Pastor Paul Adewunmi was a man of exceptional 
        character while he was here with us. He lived a 
        life that glorified GOD in his time on earth. This
        section is dedicated to his memory and to the
        continuation of the ministry he started based 
        on instructions given to him by the Holy Spirit."
      >
        <span className="block font-general-sans text-sm-m md:text-sm-t lg:text-sm-d lg:font-semibold lg:text-[#C4C4C4]">
          IN MEMORIAM
        </span>
        <h2 className="my-2 max-w-[240px] text-h2-m font-bold md:text-h2-t lg:mb-6 lg:max-w-full lg:text-h2-d">
          A life dedicated to the service of GOD.
        </h2>
      </Memoriam>
      <Hero />
      <VideoMessages />
      <AudioMessages />
    </main>
  );
}
