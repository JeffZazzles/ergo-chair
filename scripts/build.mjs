import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(projectRoot, "dist");
const entries = ["index.html", "styles.css", "script.js", "assets", ".nojekyll"];

function assertInsideProject(targetPath) {
  const resolved = resolve(targetPath);
  if (!resolved.startsWith(projectRoot)) {
    throw new Error(`Refusing to write outside project root: ${resolved}`);
  }
  return resolved;
}

await rm(assertInsideProject(distDir), { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of entries) {
  await cp(join(projectRoot, entry), join(distDir, entry), { recursive: true });
}

console.log(`Built static site at ${distDir}`);
