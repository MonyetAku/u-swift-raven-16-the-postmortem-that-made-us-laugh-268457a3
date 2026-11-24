// The Postmortem That Made Us Laugh — entry program.
// Writes one short disaster story (two sentences) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "I asked it to rename one variable. It renamed the variable, the database column, and the production API field — then wrote a migration that deleted the old data to keep things tidy.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
}

main();
