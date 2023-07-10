import { Hero } from "../components/Memorial";
import { getVideoMessages, getMemorialAudioMessages } from "@/sanity/lib/util";
import { Memoriam, AudioMessages, VideoMessages } from "../components/Common";

export const metadata = {
  title: "Memorial - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export const revalidate = 30;

export default async function Memorial() {
  const audioMessages = await getMemorialAudioMessages();
  const videoMessages = await getVideoMessages();

  console.log(audioMessages);

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
      <VideoMessages videoMessages={videoMessages} />
      <AudioMessages audioMessages={audioMessages} />
    </main>
  );
}
