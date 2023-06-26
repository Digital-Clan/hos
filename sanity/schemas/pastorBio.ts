import { Rule } from "sanity";

export const pastorBio = {
  name: "biography",
  title: "Biography",
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
      name: "biography",
      title: "Biography of Pastor Paul Adewunmi",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
