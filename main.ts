// One Word, One Username, One Reward — entry for make.fun
// Writes our own make.fun username, one word, to /output/entry.txt.
// Stdlib only: no dependencies, no network, no input read.

import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "hodlr";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME + "\n", "utf8");
