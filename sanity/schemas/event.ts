import { Rule } from "sanity";

export const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "minister",
      title: "Minister",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sermon",
      title: "Sermon",
      type: "string",
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
      name: "startTime",
      title: "StartTime",
      type: "datetime",
    },
    {
      name: "endTime",
      title: "EndTime",
      type: "datetime",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
