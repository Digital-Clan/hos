import { Rule } from "sanity";

export const pastorBio = {
  name: "biography",
  title: "Biography",
  type: "document",
  fields: [
    {
      name: "Biography",
      title: "Biography of Pastor Paul Adewunmi",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
