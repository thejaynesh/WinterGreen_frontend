import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../shared/schema";
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Connect to PostgreSQL
// const queryClient = postgres(process.env.DATABASE_URL);
// export const db = drizzle(queryClient, { schema });
