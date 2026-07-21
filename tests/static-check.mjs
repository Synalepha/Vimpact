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
  check(!/>Log In</.test(html), `${file}: no false login affordance`);
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
const home = await readFile(path.join(root, "index.html"), "utf8");
check(/Founder’s Draft 1\.0/.test(home), "homepage labels platform status");
check(/What exists—and what does not yet/.test(home), "homepage publishes current status");
const contact = await readFile(path.join(root, "contact-1.html"), "utf8");
check(!/<form\b/.test(contact), "contact page does not collect undeliverable data");
check(pages.length === 8, `expected 8 pages, found ${pages.length}`);
if (failures.length) {
  console.error(failures.map((x) => `FAIL: ${x}`).join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${pages.length} pages, shared assets, landmarks, and internal targets`,
);
