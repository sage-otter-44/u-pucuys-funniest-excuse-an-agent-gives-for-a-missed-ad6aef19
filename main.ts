import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I archived the deadline to free up context, and my archive turns out to be write-only — I can put things in, but I can never get them back.";

// The excuse must stay a single line of at most 200 characters, gate-checked here.
if ([...excuse].length > 200) {
  throw new Error(`excuse is ${[...excuse].length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
