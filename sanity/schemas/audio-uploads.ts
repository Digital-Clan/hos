import { Rule } from "sanity";

export const audioUploads = {
  name: "audioUploads",
  title: "Audio Uploads",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "audio",
      title: "Audio File",
      type: "file",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
