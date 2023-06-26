import { Rule } from "sanity";

export const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
