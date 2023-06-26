import { client } from "./client";
import { TeamMember, About } from "./types";

export async function getTeamMembers(): Promise<TeamMember[]> {
  return await client.fetch(
    `*[_type == "team"] | order(_createdAt desc) { name, bio, "profileImage": profileImage.asset->url }`
  );
}
export async function getAbout(): Promise<About[]> {
  return await client.fetch(`*[_type == "about"] | order(_createdAt desc) { beliefs, ourVisioner }`);
}
