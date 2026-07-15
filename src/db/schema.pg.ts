import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  nickname: text("nickname"),
  avatar: text("avatar"),
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

export const reviewWords = pgTable("review_words", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  wordEn: text("word_en").notNull(),
  wordZh: text("word_zh").notNull(),
  ipa: text("ipa"),
  courseId: text("course_id").notNull(),
  courseTitle: text("course_title").notNull(),
  source: text("source").notNull(), // "peek" | "saved"
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export const battles = pgTable("battles", {
  id: text("id").primaryKey(),
  courseId: text("course_id").notNull(),
  creatorId: text("creator_id")
    .notNull()
    .references(() => users.id),
  opponentId: text("opponent_id")
    .references(() => users.id),
  roomCode: text("room_code").notNull().unique(),
  maxPeeks: integer("max_peeks").notNull().default(5),
  status: text("status").notNull().default("waiting"),
  winnerId: text("winner_id"),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export const battleResults = pgTable("battle_results", {
  id: text("id").primaryKey(),
  battleId: text("battle_id")
    .notNull()
    .references(() => battles.id),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  finishedAt: timestamp("finished_at", { mode: "string" }),
  totalTime: integer("total_time").notNull().default(0),
  peekCount: integer("peek_count").notNull().default(0),
});

export const presetCourses = pgTable("preset_courses", {
  id: text("id").primaryKey(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  scene: text("scene").notNull(),
  difficulty: text("difficulty").notNull(),
  sentences: text("sentences").notNull(),
  sentenceCount: integer("sentence_count").notNull().default(50),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});
