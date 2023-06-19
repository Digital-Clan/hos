import { Memoriam } from "../components/Common";
import { Hero } from "../components/Memorial";

export default function Memorial() {
  return (
    <main>
      <Memoriam showButton={false} />
      <Hero />
    </main>
  );
}
