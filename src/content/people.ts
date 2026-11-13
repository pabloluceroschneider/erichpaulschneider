export interface Person {
  id: string;
  name: string;
  birth: string;
  death?: string;
  place: string;
  photo: string;
  biographyKey: string;
  chapter: string;
}

export const people: Person[] = [
  {
    id: "erich-paul-schneider",
    name: "Erich Paul Schneider",
    birth: "15.09.1905", death: "29.03.1975",
    place: "Breslau — Deán Funes",
    photo: "Eric Paul Schneider.png",
    biographyKey: "ch1_p1",
    chapter: "origenes"
  },
  {
    id: "emma-anna-berta-langer",
    name: "Emma Anna Berta Langer",
    birth: "23.02.1881",
    place: "Nieder-Prietzen — Wiesbaden",
    photo: "emma_passport-001.jpg",
    biographyKey: "ch5_p3",
    chapter: "emma-y-el-reencuentro"
  },
  {
    id: "willy-walter-schneider",
    name: "Willÿ Walter Schneider",
    birth: "15.09.1905",
    place: "Breslau — Wiesbaden",
    photo: "photo-008.jpg",
    biographyKey: "ch4_willy_p1",
    chapter: "la-familia-en-europa"
  },
  {
    id: "paul-wilhelm-schneider",
    name: "Paul Wilhelm Schneider",
    birth: "16.04.1876",
    place: "Nieder-Prietzen — Breslau",
    // Group photograph, not an individual portrait.
    photo: "photo-000.jpg",
    biographyKey: "ch1_parents",
    chapter: "origenes"
  }
];
