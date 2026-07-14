const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

const sql = neon("postgresql://neondb_owner:npg_IPZk5dVlz2Bn@ep-flat-base-aovr6gsh-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

async function main() {
  const { v4: uuid } = require("uuid");

  const dataPath = path.join(__dirname, "preset-courses.json");
  const courses = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  // Check if already seeded
  const result = await sql`SELECT COUNT(*) as count FROM preset_courses`;
  if (Number(result[0].count) > 0) {
    console.log(`Already ${result[0].count} courses, skipping`);
    process.exit(0);
  }

  for (const c of courses) {
    await sql`
      INSERT INTO preset_courses (id, category, title, scene, difficulty, sentences, sentence_count)
      VALUES (${uuid()}, ${c.category}, ${c.title}, ${c.scene}, ${c.difficulty}, ${JSON.stringify(c.sentences)}, ${c.sentences.length})
    `;
    process.stdout.write(".");
  }

  console.log(`\n✅ Seeded ${courses.length} courses`);
}

main().catch(e => { console.error(e.message || e); process.exit(1); });
