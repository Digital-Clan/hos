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

export type Audio = {
  title: string;
  link: string;
  coverImage: string;
  date: string;
  minister: string;
};

export type Video = {
  title: string;
  embedCode: string;
};

export type Post = {
  title: string;
  slug: string;
  content: PortableTextBlock[];
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
};
