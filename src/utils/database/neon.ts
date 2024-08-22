import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.POSTGRES_URL;
if (!databaseUrl) {
  throw new Error("POSTGRES_URL is not defined in the environment variables");
}

export const db = drizzle(sql);