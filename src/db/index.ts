import Database from "better-sqlite3";
import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzlePg } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as sqliteSchema from "./schema";
import * as pgSchema from "./schema.pg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDb(): any {
  if (_db) return _db;

  const pgUrl = process.env.DATABASE_URL;

  if (pgUrl) {
    // Neon Postgres (production)
    const sql = neon(pgUrl);
    _db = drizzlePg(sql, { schema: pgSchema });
    console.log("🔌 Using Neon Postgres");
  } else {
    // SQLite (local dev)
    const sqlite = new Database("english-spelling.db");
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("foreign_keys = ON");
    _db = drizzleSqlite(sqlite, { schema: sqliteSchema });
    console.log("📦 Using local SQLite");
  }

  return _db;
}

// Export types from SQLite schema (structural types are same)
export type User = typeof sqliteSchema.users.$inferSelect;
export type NewUser = typeof sqliteSchema.users.$inferInsert;
export type Course = typeof sqliteSchema.courses.$inferSelect;
export type NewCourse = typeof sqliteSchema.courses.$inferInsert;
export type Progress = typeof sqliteSchema.progress.$inferSelect;
export type NewProgress = typeof sqliteSchema.progress.$inferInsert;
