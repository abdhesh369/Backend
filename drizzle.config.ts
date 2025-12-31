import { defineConfig } from "drizzle-kit";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  out: "./drizzle/migrations",              // where migration files will be generated
  schema: "./src/db/schema.ts",             // adjust if your schema is elsewhere
  dialect: "sqlite",
  dbCredentials: {
    url: path.resolve(__dirname, "dist/data/database.sqlite"), // matches your backend logs
  },
  verbose: true,
  strict: true,
});