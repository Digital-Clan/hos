import { client } from "./client";
import { TeamMember, About, Event } from "./types";

export async function getTeamMembers(): Promise<TeamMember[]> {
  return await client.fetch(
    `*[_type == "team"] | order(_createdAt desc) { name, bio, "profileImage": profileImage.asset->url }`
  );
}

export async function getAbout(): Promise<About[]> {
  return await client.fetch(`*[_type == "about"] | order(_createdAt desc) { beliefs, ourVisioner }`);
}

export async function getEvents(): Promise<Event[]> {
  return await client.fetch(
    `*[_type == "event"] | order(_createdAt desc) { title, date, minister, sermon, "coverImage": coverImage.asset->url, startTime, endTime, address, live, link }`
  );
}

export async function getLiveEvents(): Promise<Event[]> {
  return await client.fetch(
    `*[_type == "event" && live == true] | order(_createdAt desc) { title, date, minister, sermon, "coverImage": coverImage.asset->url, startTime, endTime, address, live, link }`
  );
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return await client.fetch(
    `*[_type == "event" && live == false] | order(_createdAt desc) { title, date, minister, sermon, "coverImage": coverImage.asset->url, startTime, endTime, address, live, link }`
  );
}
