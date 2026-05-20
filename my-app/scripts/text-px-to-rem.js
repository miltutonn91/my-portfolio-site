const fs = require("fs");
const path = require("path");

const targetDirs = ["app", "components", "data"];
const targetExtensions = [".tsx", ".ts", ".jsx", ".js"];

function pxToRem(px) {
  const rem = Number(px) / 16;
  return Number(rem.toFixed(4));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name);
    if (!targetExtensions.includes(ext)) continue;

    const original = fs.readFileSync(fullPath, "utf8");

    const replaced = original.replace(
      /text-\[(\d+(?:\.\d+)?)px\]/g,
      (_, px) => `text-[${pxToRem(px)}rem]`
    );

    if (replaced !== original) {
      fs.writeFileSync(fullPath, replaced, "utf8");
      console.log(`updated: ${fullPath}`);
    }
  }
}

targetDirs.forEach(walk);
