/**
 * Post-build fix for the next/og opengraph-image file convention under
 * `output: "export"`.
 *
 * Next.js writes the generated PNG to `out/opengraph-image` (no extension)
 * and references it in HTML as `opengraph-image?<hash>`. GitHub Pages serves
 * extensionless files as application/octet-stream, which breaks Open Graph
 * previews on Slack, Twitter, Discord, etc.
 *
 * This script renames the file to `opengraph-image.png` and rewrites every
 * HTML reference to match. It is idempotent.
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const OLD_NAME = "opengraph-image";
const NEW_NAME = "opengraph-image.png";

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : Promise.resolve([full]);
    })
  );
  return files.flat();
}

async function main() {
  const allFiles = await walk(OUT_DIR);

  // Rename every extensionless `opengraph-image` file (root + nested
  // dynamic-route variants like courses/<slug>/opengraph-image).
  const ogFiles = allFiles.filter(
    (f) => path.basename(f) === OLD_NAME
  );

  let renamed = 0;
  for (const file of ogFiles) {
    const target = path.join(path.dirname(file), NEW_NAME);
    try {
      await fs.rename(file, target);
      renamed++;
    } catch {
      // Already renamed by a previous run.
    }
  }

  const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));

  // Match opengraph-image followed by an optional ?hash query string,
  // ensuring we don't double-rewrite the .png file we just created.
  const pattern = /opengraph-image(?!\.png)(\?[^"'\s\\]*)?/g;

  let patched = 0;
  for (const file of htmlFiles) {
    const original = await fs.readFile(file, "utf8");
    if (!pattern.test(original)) continue;
    pattern.lastIndex = 0;
    const replaced = original.replace(pattern, NEW_NAME);
    if (replaced !== original) {
      await fs.writeFile(file, replaced);
      patched++;
    }
  }

  console.log(
    `[fix-og-image] renamed: ${renamed}, html files patched: ${patched}`
  );
}

main().catch((err) => {
  console.error("[fix-og-image] failed:", err);
  process.exit(1);
});
