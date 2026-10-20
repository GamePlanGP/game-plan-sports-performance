#!/usr/bin/env node
/**
 * Lists every open `{{PLACEHOLDER}}` and every `draft: true` in the /v2
 * homepage sources. Phase 3 (production deploy) requires zero of both.
 *
 *   npm run check:placeholders          report only (exit 0)
 *   npm run check:placeholders -- --strict   exit 1 if anything is open
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const targets = ["src/content", "src/components/home", "src/app/v2"];
const strict = process.argv.includes("--strict");

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(name)) files.push(p);
  }
};
targets.forEach((t) => walk(join(root, t)));

const placeholders = new Map(); // id -> Set<"file:line">
const drafts = [];

for (const file of files) {
  const rel = relative(root, file);
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // comments
      for (const m of line.matchAll(/\{\{([A-Z0-9_]+)\}\}/g)) {
        if (!placeholders.has(m[1])) placeholders.set(m[1], new Set());
        placeholders.get(m[1]).add(`${rel}:${i + 1}`);
      }
      if (/\bdraft:\s*true\b/.test(line)) drafts.push(`${rel}:${i + 1}`);
    });
}

const ids = [...placeholders.keys()].sort();
console.log(`\nOpen placeholders (${ids.length})`);
console.log("-".repeat(40));
for (const id of ids) {
  const where = [...placeholders.get(id)];
  console.log(`  {{${id}}}  ${where[0]}${where.length > 1 ? `  (+${where.length - 1} more)` : ""}`);
}
console.log(`\nDraft copy blocks (${drafts.length})`);
console.log("-".repeat(40));
for (const d of drafts) console.log(`  ${d}`);

const open = ids.length + drafts.length;
console.log(`\n${open === 0 ? "All clear." : `${open} item(s) still open.`}\n`);
if (strict && open > 0) process.exit(1);
