import { PortableTextBlock } from "sanity";

export type TeamMember = {
  name: string;
  bio: PortableTextBlock[];
  profileImage: string;
};

export type About = {
  beliefs: PortableTextBlock[];
  ourVisioner: PortableTextBlock[];
};

export type Event = {
  title: string;
  minister: string;
  sermon: string;
  coverImage: string;
  startTime: string;
  endTime: string;
  address: string;
  live: boolean;
  link: string;
};
