import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = "dist";
const languages = ["es", "en", "de", "pl"];
const chapters = [
  "origenes", "breslau-en-guerra", "el-viaje", "la-familia-en-europa",
  "emma-y-el-reencuentro", "una-vida-en-argentina", "el-regreso"
];
const persons = [
  "erich-paul-schneider", "emma-anna-berta-langer",
  "willy-walter-schneider", "paul-wilhelm-schneider"
];

function page(...parts) {
  return fs.readFileSync(path.join(root, ...parts, "index.html"), "utf8");
}
function verifyAsset(name) {
  assert.ok(fs.existsSync(path.join(root, "images", name)), "Missing asset: " + name);
}
assert.ok(fs.existsSync(path.join(root,"index.html")), "Missing language landing page");
for (const lang of languages) {
  for (const route of ["", "historia", "cronologia", "archivo", "familia"]) {
    const html = page(lang, ...(route ? [route] : []));
    assert.ok(html.includes('<html lang="' + lang + '"'), "Incorrect language for " + lang + "/" + route);
    assert.ok(!html.includes('data-i18n='), "Untranslated placeholder in " + lang + "/" + route);
  }
  for (const slug of chapters) {
    const html = page(lang, "historia", slug);
    assert.ok(html.includes("archive"), "Missing archive layout on " + lang + "/" + slug);
    assert.ok(!html.includes('data-i18n='), "Untranslated chapter placeholder: " + lang + "/" + slug);
    assert.ok(!html.includes('onclick="openLightbox'), "Old inline viewer event in " + lang + "/" + slug);
  }
  for (const slug of persons) {
    assert.ok(page(lang, "familia", slug).includes("Erich Paul Schneider"), "Missing profile: " + slug);
  }
}
verifyAsset("Eric Paul Schneider.png");
verifyAsset("matrimonio-000.jpg");
verifyAsset("photo-011.jpg");
verifyAsset("emma_passport-001.jpg");
const SpanishOrigins = page("es","historia","origenes");
assert.ok(SpanishOrigins.includes("Paul Wilhelm Schneider"), "Original narrative not rendered in Spanish origins");
assert.ok(SpanishOrigins.includes("/erichpaulschneider/images/"), "Base URL missing from historical images");
const generated = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir,{withFileTypes:true})) {
    const filename = path.join(dir,entry.name);
    if (entry.isDirectory()) walk(filename);
    else if (entry.name === "index.html") generated.push(filename);
  }
}
walk(root);
assert.equal(generated.length,65,"Unexpected number of static pages");
console.log("Verified " + generated.length + " generated pages, four languages, and archival assets.");
