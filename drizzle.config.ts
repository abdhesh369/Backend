import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  out: "./drizzle/migrations",              // where migration files will be generated
  schema: "./shared/schema.ts",             // adjust if your schema is elsewhere
  dialect: "mysql",
  dbCredentials: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "portfolio",
    port: parseInt(process.env.MYSQL_PORT || "3306"),
  },
  verbose: true,
  strict: true,
});