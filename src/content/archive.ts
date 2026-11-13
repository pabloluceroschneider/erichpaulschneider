export type ArchiveKind = "photograph" | "document";
export interface ArchiveItem {
  file: string;
  kind: ArchiveKind;
  date?: string;
  captionKey?: string;
  title?: string;
}

// Only material already displayed on the original site is exposed here.
// Other assets remain preserved for cataloguing and provenance review.
export const archive: ArchiveItem[] = [
  { file: "Eric Paul Schneider.png", kind: "photograph", title: "Erich Paul Schneider" },
  { file: "matrimonio-000.jpg", kind: "document", date: "1903 / 1945", captionKey: "ch1_matrimonio_caption" },
  { file: "matrimonio-001.jpg", kind: "document", date: "1903 / 1945", captionKey: "ch1_matrimonio_caption" },
  { file: "cedula-000.png", kind: "document", captionKey: "ch2_cedula_cap000" },
  { file: "cedula-001.png", kind: "document", captionKey: "ch2_cedula_cap001" },
  { file: "cedula-002.png", kind: "document", captionKey: "ch2_cedula_cap002" },
  { file: "emma_passport-001.jpg", kind: "document", date: "1949", captionKey: "ch5_portrait_caption" },
  { file: "emma_passport-000.jpg", kind: "document", date: "1949", captionKey: "ch5_caption_passport" },
  { file: "emma_inmig-000.jpg", kind: "document", date: "1949", captionKey: "ch5_caption_inmig" },
  { file: "photo-000.jpg", kind: "photograph", captionKey: "ch1_family_caption" },
  { file: "photo-001.jpg", kind: "photograph" },
  { file: "photo-002.jpg", kind: "photograph", captionKey: "ch1_house_caption" },
  { file: "photo-003.jpg", kind: "photograph" },
  { file: "photo-004.jpg", kind: "photograph" },
  { file: "photo-005.jpg", kind: "photograph" },
  { file: "photo-006.jpg", kind: "photograph", captionKey: "ch4_willy_cap006" },
  { file: "photo-007.jpg", kind: "photograph", captionKey: "ch4_willy_cap007" },
  { file: "photo-008.jpg", kind: "photograph", captionKey: "ch4_willy_cap008" },
  { file: "photo-009.jpg", kind: "photograph", captionKey: "ch4_willy_cap009" },
  { file: "photo-010.jpg", kind: "photograph", captionKey: "ch2_cap010" },
  { file: "photo-011.jpg", kind: "photograph", captionKey: "ch_dean_cap011" },
  { file: "photo-012.jpg", kind: "photograph", captionKey: "ch_dean_cap012" }
];
