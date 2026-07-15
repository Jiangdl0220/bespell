const { neon } = require("@neondatabase/serverless");
const sql = neon("postgresql://neondb_owner:npg_IPZk5dVlz2Bn@ep-flat-base-aovr6gsh-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

(async () => {
  await sql`DELETE FROM battle_results`;
  await sql`DELETE FROM battles`;
  console.log("cleaned");
  process.exit(0);
})();
