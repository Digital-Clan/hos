import { Hero, Welcome, ValuesBeliefs, Mission, Visioner, Team } from "../components/About";
import { getTeamMembers, getAbout } from "@/sanity/lib/util";

export const metadata = {
  title: "About Us - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export const revalidate = 30;

export default async function About() {
  const teamMembers = await getTeamMembers();
  const about = await getAbout();

  return (
    <main>
      <Hero />
      <Welcome message={about[0].welcomeMessage} />
      <ValuesBeliefs beliefs={about[0].beliefs} />
      <Mission />
      <Visioner visioner={about[0].ourVisioner} />
      <Team members={teamMembers} />
    </main>
  );
}
