import { Rule } from "sanity";

export const video = {
  name: "video",
  title: "Video Message",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "embedCode",
      title: "Youtube Embed Code",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
