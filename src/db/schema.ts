import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  nickname: text("nickname"),
  avatar: text("avatar"),
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

export const reviewWords = sqliteTable("review_words", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  wordEn: text("word_en").notNull(),
  wordZh: text("word_zh").notNull(),
  ipa: text("ipa"),
  courseId: text("course_id").notNull(),
  courseTitle: text("course_title").notNull(),
  source: text("source").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const battles = sqliteTable("battles", {
  id: text("id").primaryKey(),
  courseId: text("course_id").notNull(),
  creatorId: text("creator_id").notNull().references(() => users.id),
  opponentId: text("opponent_id").references(() => users.id),
  roomCode: text("room_code").notNull().unique(),
  maxPeeks: integer("max_peeks").notNull().default(5),
  status: text("status").notNull().default("waiting"),
  winnerId: text("winner_id"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});

export const battleResults = sqliteTable("battle_results", {
  id: text("id").primaryKey(),
  battleId: text("battle_id").notNull().references(() => battles.id),
  userId: text("user_id").notNull().references(() => users.id),
  finishedAt: integer("finished_at", { mode: "timestamp" }),
  totalTime: integer("total_time").notNull().default(0),
  peekCount: integer("peek_count").notNull().default(0),
});

export const presetCourses = sqliteTable("preset_courses", {
  id: text("id").primaryKey(),
  category: text("category").notNull(),
  title: text("title").notNull(),
  scene: text("scene").notNull(),
  difficulty: text("difficulty").notNull(),
  sentences: text("sentences").notNull(),
  sentenceCount: integer("sentence_count").notNull().default(50),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});
