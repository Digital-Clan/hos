/* eslint-disable @next/next/no-img-element */
import { getBio } from "@/sanity/lib/util";
import Bio from "./Bio";

export const metadata = {
  title: "Biography of Pastor Paul Adewunmi - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export default async function Page() {
  const bio = await getBio();

  return <Bio image={bio.image} biography={bio.biography} />;
}
