import { drizzle } from "drizzle-orm/vercel-postgres";
import { config } from "dotenv";
import * as schema from "./schema";
import { sql } from "@vercel/postgres";

config({ path: ".env.local" }); // or .env

const db = drizzle(sql, {
  schema,
});

export default db;
