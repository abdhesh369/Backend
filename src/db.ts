// ============================================================
// FILE: src/db.ts
// ============================================================
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "../shared/schema.js";
import dotenv from "dotenv";

dotenv.config();

function logDb(message: string, level: "info" | "error" | "warn" = "info") {
  const timestamp = new Date().toISOString();
  const prefix = level === "error" ? "❌" : level === "warn" ? "⚠️" : "✓";
  console.log(`${prefix} [${timestamp}] [DB] ${message}`);
}

const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "portfolio",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
};

logDb(`Connecting to MySQL at ${dbConfig.host}:${dbConfig.port}...`);

const pool = mysql.createPool(dbConfig);

// ✅ Export connections
export const db = drizzle(pool, { schema, mode: "default" });
export const connection = pool;
export { schema };

// Health check
export async function checkDatabaseHealth(): Promise<{ healthy: boolean; message: string; details?: any; }> {
  try {
    const [rows] = await pool.query("SELECT 1 as health");
    if (Array.isArray(rows) && (rows[0] as any).health === 1) {
      return {
        healthy: true,
        message: "Database is healthy",
        details: {
          host: dbConfig.host,
          database: dbConfig.database,
        },
      };
    }
    return { healthy: false, message: "Database query returned unexpected result" };
  } catch (error) {
    return {
      healthy: false,
      message: `Database health check failed: ${error}`,
      details: { error },
    };
  }
}

// Graceful shutdown
export async function closeDatabaseConnection(): Promise<void> {
  try {
    await pool.end();
    logDb("Database connection closed successfully");
  } catch (error) {
    logDb(`Error closing database connection: ${error}`, "error");
    throw error;
  }
}

process.on("beforeExit", () => {
  closeDatabaseConnection().catch((error) => {
    logDb(`Error during cleanup: ${error}`, "error");
  });
});