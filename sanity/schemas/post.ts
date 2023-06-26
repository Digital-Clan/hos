import { Rule } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
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
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
