import { Rule } from "sanity";

export const memorialVideo = {
  name: "memorialVideo",
  title: "Memorial Video Message",
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
