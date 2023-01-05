import { defineField, defineType } from "sanity";

export default defineType({
  name: "home-page",
  title: "Home Page",
  type: "document",
  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "hero",
    }),
  ],
});
