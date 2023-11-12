/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/manage/[[...index]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Logo from "./layouts/sanity-studio/components/Logo";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas";

export default defineConfig({
  basePath: "/manage",
  projectId,
  dataset,
  schema,
  plugins: [deskTool()],
  studio: {
    components: {
      logo: Logo,
    },
  },
});
