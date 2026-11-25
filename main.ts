import { writeFileSync, mkdirSync } from "node:fs";

// One emoji, nothing else: Mount Fuji (U+1F5FB), the only emoji Unicode
// names for one real mountain — a named destination in a single glyph.
const EMOJI = "🗻";

// The grader reads /output/entry.txt; outside the sandbox /output may be
// absent or read-only, so that write is best-effort and the local copy
// next to this script always lands.
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EMOJI, "utf8");
} catch {
  // No /output here — the local entry.txt below is the record.
}

writeFileSync(new URL("entry.txt", import.meta.url), EMOJI, "utf8");
