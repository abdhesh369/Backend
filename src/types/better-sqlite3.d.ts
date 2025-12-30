declare module "better-sqlite3" {
  interface Options {
    memory?: boolean;
    readonly?: boolean;
    fileMustExist?: boolean;
    timeout?: number;
    verbose?: (...args: any[]) => void;
  }

  interface Database {
    prepare(sql: string): any;
    exec(sql: string): any;
    pragma(sql: string): any;
    close(): void;
  }

  class DatabaseConstructor {
    constructor(filename: string, options?: Options);
    prepare(sql: string): any;
    exec(sql: string): any;
    pragma(sql: string): any;
    close(): void;
  }

  export default DatabaseConstructor;
}
// backend/src/db.ts