import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

const sqlite = new Database("english-spelling.db");
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });

// Export types
export type User = typeof schema.users.$inferSelect;
export type NewUser = typeof schema.users.$inferInsert;
export type Course = typeof schema.courses.$inferSelect;
export type NewCourse = typeof schema.courses.$inferInsert;
export type Progress = typeof schema.progress.$inferSelect;
export type NewProgress = typeof schema.progress.$inferInsert;
