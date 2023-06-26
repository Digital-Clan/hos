import { Hero, EventsList } from "../components/Events";
import { getLiveEvents, getUpcomingEvents } from "@/sanity/lib/util";

export default async function Events() {
  const liveEvents = await getLiveEvents();
  const upcomingEvents = await getUpcomingEvents();

  return (
    <main>
      <Hero />
      <EventsList liveEvents={liveEvents} upcomingEvents={upcomingEvents} />
    </main>
  );
}
