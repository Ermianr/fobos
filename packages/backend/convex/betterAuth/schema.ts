import { defineSchema } from "convex/server";

import { tables } from "./generatedSchema";
const schema = defineSchema({
  /* Generate Schema: bunx @better-auth/cli generate -y --output generatedSchema.ts */
  ...tables,
});

export default schema;
