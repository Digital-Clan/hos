import { client } from "./client";
import { TeamMember, About, Event, Audio, Video } from "./types";

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

export async function getAudioMessages(): Promise<Audio[]> {
  return await client.fetch(
    `*[_type == "audio"] | order(_createdAt desc) { title, link, "coverImage": coverImage.asset->url, date, minister }`
  );
}

export async function getVideoMessages(): Promise<Video[]> {
  return await client.fetch(`*[_type == "video"] | order(_createdAt desc) { title, embedCode }`);
}
