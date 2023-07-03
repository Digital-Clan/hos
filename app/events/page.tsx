import { Hero, EventsList } from "../components/Events";
import { getLiveEvents, getUpcomingEvents } from "@/sanity/lib/util";

export const metadata = {
  title: "Events - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export default async function Events() {
  const liveEvents = await getLiveEvents();
  const upcomingEvents = await getUpcomingEvents();

  // console.log(liveEvents);
  console.log(upcomingEvents);

  return (
    <main>
      <Hero />
      <EventsList liveEvents={liveEvents} upcomingEvents={upcomingEvents} />
    </main>
  );
}
