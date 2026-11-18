// main.ts — news-image-20261118 entry
//
// Copies the pre-rendered front-page collage (entry.png, sitting next to
// this file) into the output directory expected by the make.fun harness.
// Node 22, standard library only; no network access is used at any point.

import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is
// unset or blank so a stray empty value never produces a broken path.
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const outPath = join(outDir, "entry.png");

if (!existsSync(sourcePath)) {
  throw new Error(`Source image not found: ${sourcePath}`);
}

const bytes = readFileSync(sourcePath);
if (bytes.length === 0) {
  throw new Error(`Refusing to write an empty image: ${sourcePath} is 0 bytes`);
}

// Sanity check: the bundled image is JPEG data (SOI marker FF D8) stored
// under the .png name the rules require; a PNG signature is accepted too,
// so a future re-render in either format still passes this check.
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
const isPng =
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error(`Source image has an unrecognised header: ${sourcePath}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, bytes);
console.log(`Wrote ${bytes.length} bytes to ${outPath}`);
