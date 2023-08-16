import { CommentIcon } from "@sanity/icons";

export const comments = {
  name: "comment",
  type: "document",
  title: "Comment",
  icon: CommentIcon,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [
        {
          type: "post",
        },
      ],
    },
  ],
};
