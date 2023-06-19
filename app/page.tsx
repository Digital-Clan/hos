import { Hero, Mission, Events } from "@/app/components/Home";
import { Memoriam } from "@/app/components/Common";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Memoriam
        showButton={true}
        classNames="bg-cover bg-memoriam-home-bg-mobile sm:bg-memoriam-home-bg-pc"
      />
      <Events />
    </main>
  );
}
