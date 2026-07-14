import { drizzle as drizzlePg } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as sqliteSchema from "./schema";
import * as pgSchema from "./schema.pg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getDb(): Promise<any> {
  if (_db) return _db;

  const pgUrl = process.env.DATABASE_URL;

  if (pgUrl) {
    const sql = neon(pgUrl);

    // Auto-create tables on first connection
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS courses (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id),
        title TEXT NOT NULL,
        scene TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        sentences TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS progress (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL REFERENCES users(id),
        course_id TEXT NOT NULL REFERENCES courses(id),
        sentence_index INTEGER NOT NULL,
        attempts INTEGER NOT NULL DEFAULT 0,
        correct INTEGER NOT NULL DEFAULT 0,
        last_seen TIMESTAMP
      )
    `;
    console.log("🔌 Using Neon Postgres (tables ready)");

    _db = drizzlePg(sql, { schema: pgSchema });
  } else if (process.env.VERCEL || process.env.EDGEONE_PAGES) {
    throw new Error(
      "DATABASE_URL not configured. Add it in platform Settings → Environment Variables."
    );
  } else {
    // SQLite local dev — dynamic import to avoid native module on Vercel
    const { default: Database } = await import("better-sqlite3");
    const { drizzle: drizzleSqlite } = await import("drizzle-orm/better-sqlite3");
    const sqlite = new Database("english-spelling.db");
    sqlite.pragma("journal_mode = WAL");
    sqlite.pragma("foreign_keys = ON");
    _db = drizzleSqlite(sqlite, { schema: sqliteSchema });
    console.log("📦 Using local SQLite");
  }

  return _db;
}

export type User = typeof sqliteSchema.users.$inferSelect;
export type NewUser = typeof sqliteSchema.users.$inferInsert;
export type Course = typeof sqliteSchema.courses.$inferSelect;
export type NewCourse = typeof sqliteSchema.courses.$inferInsert;
export type Progress = typeof sqliteSchema.progress.$inferSelect;
export type NewProgress = typeof sqliteSchema.progress.$inferInsert;
