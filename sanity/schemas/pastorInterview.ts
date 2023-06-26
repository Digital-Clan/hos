import { Rule } from "sanity";

export const pastorInterview = {
  name: "interview",
  title: "Interview",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Photo of Pastor Paul Adewunmi",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "interview",
      title: "An interview with Pastor Paul Adewunmi",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
