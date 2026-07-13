import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const courses = sqliteTable("courses", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  title: text("title").notNull(),
  scene: text("scene").notNull(),
  difficulty: text("difficulty").notNull(),
  sentences: text("sentences").notNull(), // JSON string of Sentence[]
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const progress = sqliteTable("progress", {
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
  lastSeen: integer("last_seen", { mode: "timestamp" }),
});
