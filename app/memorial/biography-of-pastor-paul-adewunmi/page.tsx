/* eslint-disable @next/next/no-img-element */
import { getBio } from "@/sanity/lib/util";
import Bio from "./Bio";

export default async function Biography() {
  const bio = await getBio();

  return <Bio image={bio.image} biography={bio.biography} />;
}
