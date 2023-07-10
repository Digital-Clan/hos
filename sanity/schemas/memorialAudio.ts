import { Rule } from "sanity";

export const memorialAudio = {
  name: "audio",
  title: "Memorial Audio Message",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "minister",
      title: "Minister",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
