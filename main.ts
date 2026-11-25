// Entry for "Convince the AI Judge to Visit Your House: A Letter in One Image"
// (u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee).
//
// The entry image is the bundled asset entry.png: a storybook watercolour
// invitation showing a friendly robot (the AI judge) being welcomed at the
// open door of a glowing stone cottage, the host offering a homemade pie,
// with a large legible letter inviting the judge for tea, pie, the comfiest
// chair and the garden in bloom. Deterministic: the program only copies the
// bundled image to the output directory, it never re-generates anything.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  console.error("entry.png asset is missing from the entry");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// Verify the copy is whole: a truncated write must fail loudly, not ship.
const srcBytes = statSync(src).size;
const destBytes = statSync(dest).size;
if (destBytes !== srcBytes || destBytes === 0) {
  console.error(`entry.png copy failed: ${destBytes} of ${srcBytes} bytes`);
  process.exit(1);
}
console.log(`wrote entry.png (${destBytes} bytes) to ${outDir}`);
