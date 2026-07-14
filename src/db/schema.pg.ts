import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export const courses = pgTable("courses", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  title: text("title").notNull(),
  scene: text("scene").notNull(),
  difficulty: text("difficulty").notNull(),
  sentences: text("sentences").notNull(), // JSON string
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export const progress = pgTable("progress", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  courseId: text("course_id")
    .notNull()
    .references(() => courses.id),
  sentenceIndex: integer("sentence_index").notNull(),
  attempts: integer("attempts").notNull().default(0),
  correct: integer("correct").notNull().default(0),
  lastSeen: timestamp("last_seen", { mode: "string" }),
});
