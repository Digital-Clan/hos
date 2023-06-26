import { Rule } from "sanity";

export const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "beliefs",
      title: "Beliefs",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "ourVisioner",
      title: "Our Visioner",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
