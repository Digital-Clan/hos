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
