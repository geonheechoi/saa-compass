import { readFile } from "node:fs/promises";

const { questions, meta } = JSON.parse(await readFile(new URL("../data/questions.json", import.meta.url), "utf8"));
const ids = new Set(questions.map(q => q.id));
const tasks = new Set(["1.1","1.2","1.3","2.1","2.2","3.1","3.2","3.3","3.4","3.5","4.1","4.2","4.3","4.4"]);
const failures = [];
if (questions.length !== 880 || ids.size !== 880) failures.push("Expected 880 unique questions.");
for (const q of questions) {
  if (!tasks.has(q.task) || q.domain !== Number(q.task[0])) failures.push(`Question ${q.id}: invalid task.`);
  for (const lang of ["en","ko"]) {
    if (!q[lang]?.stem || q[lang].choices.length < 2) failures.push(`Question ${q.id}: incomplete ${lang} copy.`);
    if (!q.answer.every(a => q[lang].choices.some(c => c.key === a))) failures.push(`Question ${q.id}: answer missing from ${lang} choices.`);
  }
}
if (failures.length) { console.error(failures.slice(0,30).join("\n")); process.exit(1); }
console.log(`Validated ${questions.length} bilingual questions across ${tasks.size} official tasks.`);
console.log("Domain distribution:", meta.domainCounts);
