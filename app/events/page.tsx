import { Hero, EventsList } from "../components/Events";
import { getEvents } from "@/sanity/lib/util";

export const metadata = {
  title: "Events - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export const revalidate = 30;

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <Hero />
      <EventsList events={events} />
    </main>
  );
}
