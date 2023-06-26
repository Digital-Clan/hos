import { Rule } from "sanity";

export const pastorInterview = {
  name: "interview",
  title: "Interview",
  type: "document",
  fields: [
    {
      name: "interview",
      title: "An interview with Pastor Paul Adewunmi",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
