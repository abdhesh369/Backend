import * as schema from "../shared/schema.js";
export declare const db: import("drizzle-orm/better-sqlite3").BetterSQLite3Database<typeof schema> & {
    $client: Database;
};
export declare const sqlite: any;
export { schema };
export declare function checkDatabaseHealth(): {
    healthy: boolean;
    message: string;
    details?: any;
};
export declare function closeDatabaseConnection(): Promise<void>;
export declare function createBackup(backupPath?: string): string;
export declare function cleanOldBackups(keepCount?: number): void;
