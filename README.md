# Erich Paul Schneider — Family historical archive

A four-language historical archive about Erich Paul Schneider (1905–1975), his family in Silesia, migration to Argentina, and the return journey in 2026.

## Development

Requires Node.js 20+.

    npm install
    npm run dev
    npm run check
    npm run build
    npm run preview

Astro is configured for GitHub Pages at /erichpaulschneider/.

## Pages

- src/pages/[lang]/ — home, story chapters, timeline, archive and family profiles.
- src/content/chapters.ts — all original narrative sections, extracted without rewriting.
- src/content/timeline.ts — dated historical events from the original site.
- src/content/archive.ts — photographs and records already displayed on the original site.
- src/content/people.ts — historically documented family profiles.
- src/i18n/es.ts, en.ts, de.ts, pl.ts — original complete translation dictionaries.
- src/i18n/ui.ts — navigation and interface translations.
- src/styles/global.css — editorial design tokens and responsive layouts.
- public/images/ — original JPEG/PNG/PDF sources, without forced sepia effects.

New URLs are under /es/, /en/, /de/, /pl/. The root route redirects using a query language parameter (if present) or the browser's preferred language. Each content page has localized canonical and alternate links.

## Publishing

GitHub Actions builds pull requests and publishes the static site when master changes.

**Important:** In Settings → Pages, choose GitHub Actions as the build/deployment source before merging this redesign. Existing index.html remains in the repository root as a historical snapshot; it is not used by the Astro build. The workflow publishes dist/.

## Preservation

Original source files remain under images/ and index.html. The new site copies displayable media into public/images/ without transcoding, editing or color filtering them. Uncatalogued documents are not automatically added to the archive until their contents and provenance are reviewed.

Narrative reconstruction and original documentary evidence should remain distinguishable. Several proper names and historical claims from the original narrative warrant document-based review rather than silent edits.
