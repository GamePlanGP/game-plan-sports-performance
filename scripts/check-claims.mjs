#!/usr/bin/env node
/**
 * Scans the homepage content file for banned and risky claim language
 * (HOMEPAGE_BUILD_SPEC.md v1.1, Section 4). Case-insensitive; skips the FDA
 * disclaimer field and comment lines. Prints file:line for every hit and
 * exits 1 on any FAIL. Phase 3 requires zero fails.
 */
import { readFileSync } from "node:fs";
import { relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const file = new URL("../src/content/homepage.ts", import.meta.url).pathname;

const FAIL = [
  "proprietary blends", "every dose", "every other dose", "mystery blend", "yips", "anxiety", "adhd",
  "cognitive decline", "orders of magnitude", "next-level", "next level", "amplif", "synerg",
  "lower your handicap", "lower scores", "better scores", "best on the market", "clinically proven",
];
const WARN = ["hydrat", "calm", "certified", "better than", "#1"];

const lines = readFileSync(file, "utf8").split("\n");
const hits = { FAIL: [], WARN: [] };
let inDisclaimer = false;

lines.forEach((line, i) => {
  // The FDA disclaimer may span two lines: `export const FDA_DISCLAIMER =` + string.
  if (/FDA_DISCLAIMER\s*=/.test(line)) {
    inDisclaimer = !/;\s*$/.test(line);
    return;
  }
  if (inDisclaimer) {
    inDisclaimer = !/;\s*$/.test(line);
    return;
  }
  if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
  const lower = line.toLowerCase();
  for (const [level, terms] of [["FAIL", FAIL], ["WARN", WARN]]) {
    for (const term of terms) {
      if (lower.includes(term)) hits[level].push(`${relative(root, file)}:${i + 1}  "${term}"  ${line.trim().slice(0, 90)}`);
    }
  }
});

for (const level of ["FAIL", "WARN"]) {
  console.log(`\n${level} (${hits[level].length})`);
  console.log("-".repeat(40));
  for (const h of hits[level]) console.log(`  ${h}`);
}
console.log(hits.FAIL.length ? `\n${hits.FAIL.length} banned phrase(s). Fix before launch.\n` : "\nNo banned phrases.\n");
process.exit(hits.FAIL.length ? 1 : 0);
