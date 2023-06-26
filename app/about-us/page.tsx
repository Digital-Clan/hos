import { Hero, Welcome, ValuesBeliefs, Mission, Visioner, Team } from "../components/About";
import { getTeamMembers, getAbout } from "@/sanity/lib/util";

export default async function About() {
  const teamMembers = await getTeamMembers();
  const about = await getAbout();

  return (
    <main>
      <Hero />
      <Welcome />
      <ValuesBeliefs beliefs={about[0].beliefs} />
      <Mission />
      <Visioner visioner={about[0].ourVisioner} />
      <Team members={teamMembers} />
    </main>
  );
}
