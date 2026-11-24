// One Word, One Username, One Reward — entry for make.fun
// Writes our own make.fun username, one word, to the entry file.
// Stdlib only: no dependencies, no network, no input read.

import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "hodlr";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

// One word plus exactly one trailing newline — nothing else.
function writeEntry(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, USERNAME + "\n", "utf8");
}

writeEntry();
