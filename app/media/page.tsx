import { AudioMessages, VideoMessages } from "@/app/components/Common";
import { getAudioMessages, getVideoMessages } from "@/sanity/lib/util";

export default async function Media() {
  const audioMessages = await getAudioMessages();
  const videoMessages = await getVideoMessages();

  return (
    <main>
      <header className="bg-media-m bg-cover bg-center px-5 py-16 text-center text-white sm:py-24 md:px-8 md:py-32 lg:bg-media-d lg:py-36 lg:text-left">
        <div className="container-block">
          <div className="mx-auto w-[220px] sm:w-2/3 lg:mx-0">
            <h1 className="text mb-3 text-h1-m font-black md:text-h1-t lg:text-h1-d">Media</h1>
            <p className="font-general-sans text-p1-m text-body-white sm:text-base md:text-p1-t lg:text-p1-d">
              Tune in to the latest events at Hour of Solution
            </p>
          </div>
        </div>
      </header>
      <VideoMessages videoMessages={videoMessages} />
      <AudioMessages audioMessages={audioMessages} />
    </main>
  );
}
