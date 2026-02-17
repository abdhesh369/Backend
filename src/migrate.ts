import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, connection } from "./db.js";

async function main() {
    console.log("Running migrations...");
    try {
        // This will run migrations on the database, skipping the ones already applied
        await migrate(db, { migrationsFolder: "drizzle/migrations" });
        console.log("Migrations applied successfully!");
        process.exit(0);
    } catch (err) {
        console.error("Migration failed:", err);
        process.exit(1);
    } finally {
        await connection.end();
    }
}

main();
