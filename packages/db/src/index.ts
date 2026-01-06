import { env } from "@fobos/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

// biome-ignore lint/performance/noNamespaceImport: Drizzle requires the schema object for type safety
import * as schema from "./schema";

export const db = drizzle(env.DATABASE_URL, { schema });
