import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve(new URL("..", import.meta.url).pathname);
const files = await readdir(root);
const pages = files.filter((f) => f.endsWith(".html"));
const failures = [];
const check = (ok, msg) => {
  if (!ok) failures.push(msg);
};
for (const file of pages) {
  const html = await readFile(path.join(root, file), "utf8");
  check(/<!DOCTYPE html>/i.test(html), `${file}: doctype`);
  check(/<html lang="en">/i.test(html), `${file}: language`);
  check(/class="skip-link"/.test(html), `${file}: skip link`);
  check(/<main id="main"/.test(html), `${file}: main landmark`);
  check(
    /site\.js/.test(html) && /styles\.css/.test(html),
    `${file}: shared assets`,
  );
  for (const m of html.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)) {
    const target = m[1];
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    try {
      await stat(path.join(root, target));
    } catch {
      failures.push(`${file}: missing ${target}`);
    }
  }
}
check(pages.length === 8, `expected 8 pages, found ${pages.length}`);
if (failures.length) {
  console.error(failures.map((x) => `FAIL: ${x}`).join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${pages.length} pages, shared assets, landmarks, and internal targets`,
);
