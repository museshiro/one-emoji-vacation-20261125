import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Dream Vacation — redo
// Entry: Mountain Railway (U+1F69E), a scenic rail journey through the
// mountains: the dream is the journey itself, not just the destination.
// Glacier Express / Bernina Express style bucket-list trip, one glance.

const codePoint = 0x1F69E;
const emoji = String.fromCodePoint(codePoint);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");
