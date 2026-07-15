const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const sql = neon("postgresql://neondb_owner:npg_IPZk5dVlz2Bn@ep-flat-base-aovr6gsh-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

async function main() {
  // Merge all three JSON files
  const f1 = JSON.parse(fs.readFileSync("/tmp/preset-courses.json", "utf-8"));
  const f2 = JSON.parse(fs.readFileSync("/tmp/preset-courses-2.json", "utf-8"));
  let f3 = [];
  try { f3 = JSON.parse(fs.readFileSync("/tmp/preset-courses-3.json", "utf-8")); } catch {}
  
  const all = [...f1, ...f2, ...f3];
  console.log(`Total: ${all.length} courses (${all.reduce((s,c) => s + (c.sentences?.length||0), 0)} sentences)`);

  // Clear existing and re-seed
  await sql`DELETE FROM preset_courses`;

  for (const c of all) {
    await sql`
      INSERT INTO preset_courses (id, category, title, scene, difficulty, sentences, sentence_count)
      VALUES (${uuid()}, ${c.category}, ${c.title}, ${c.scene}, ${c.difficulty}, ${JSON.stringify(c.sentences)}, ${c.sentences.length})
    `;
    process.stdout.write(".");
  }

  console.log(`\n✅ Seeded ${all.length} courses to production`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
