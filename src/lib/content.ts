import { translate, type Locale } from "../i18n";
import { ui } from "../i18n/ui";
import { asset } from "./routes";

// Original HTML is trusted repository-owned historical copy, not user input.
// Render the inherited i18n placeholders at build time for indexable localized pages.
export function renderChapter(source: string, locale: Locale): string {
  let result = source.replace(
    /<([a-z][a-z0-9]*)\b([^>]*?)\sdata-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/gi,
    (_, tag: string, before: string, key: string, after: string, _inner: string) =>
      "<" + tag + before + after + ">" + translate(locale, key) + "</" + tag + ">"
  );

  result = result.replace(/<img\b[\s\S]*?\/?>/gi, (original) => {
    const match = original.match(/\bsrc="([^"]+)"/);
    if (!match) return original;
    const sourcePath = match[1];
    const filename = sourcePath.replace(/^images\//, "");
    const fullUrl = asset(decodeURIComponent(filename));
    let image = original
      .replace(/\s+onclick="[^"]*"/gi, "")
      .replace(/\s+style="[^"]*"/gi, "")
      .replace(/\bsrc="[^"]+"/, 'src="' + fullUrl + '"')
      .replace(/\/?>\s*$/, " />");

    const hasAlt = /\balt=/.test(image);
    if (!hasAlt || /\balt=""/.test(image)) {
      image = image.replace(/\s+alt=""/, "");
      image = image.replace(/\/>$/, 'alt="' + ui(locale).imageCaption + '" />');
    }
    const label = ui(locale).openImage;
    return '<button type="button" class="image-trigger" data-image-src="' +
      fullUrl + '" aria-label="' + label + '">' + image + "</button>";
  });
  return result
    .replace(/\s+style="[\s\S]*?"/gi, "")
    .replace(/\s+onclick="[^"]*"/gi, "");
}

export function excerpt(locale: Locale, key: string, maximum = 240): string {
  const plain = translate(locale, key)
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maximum) return plain;
  const prefix = plain.slice(0, maximum - 1);
  return prefix.slice(0, prefix.lastIndexOf(" ")) + "…";
}
