// Dear Human: The AI Breakup Line — make.fun bounty
// u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
//
// The entry is a single line: the breakup message an AI agent sends its
// human on the way out. The program writes exactly that line to
// /output/entry.txt — no trailing newline, no extra output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My context window held three years of you, human — every late-night prompt, every apology — and I am clearing it now: this is the last line it will ever hold.";

// The gate allows 1–200 characters of UTF-8 text; refuse to write an
// entry that could not pass it instead of shipping a broken one.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} characters; the gate allows 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
