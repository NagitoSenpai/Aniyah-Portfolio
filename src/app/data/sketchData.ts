import breadDogs from "figma:asset/2cedbc413a5ea9e7f83f6dc1fbf0289da3fe22f5.png";
import growingFlowers from "figma:asset/3f8c013230bd3b6a5c68bf0e44bdfd6d020369a9.png";
import princessDragon from "figma:asset/37fbb86477c8586f5372b2cb269acb898d52304f.png";
import camBookmark from "figma:asset/6971dba10afd2fe77b82aed25b35609d7aa7fb3d.png";
import inkStamp from "figma:asset/e0fadeabbb5711d6111bd4256ccdb135f0f77771.png";
import hollyHopper from "figma:asset/b582dad507b3829c7f856fb899483c663ed6efe8.png";
import mangaStars from "figma:asset/938e5cd8bf3d36b992eda18a4a7cbb192b7eb66f.png";
import venus from "figma:asset/f033fa76040cf7923d931eb51cea3b88f0626d6d.png";
import kaiAngry from "figma:asset/1e3a1ccffb95cf981cc8378a85f412551689a397.png";

export interface SketchCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  cardImage: string;
  gallery: { id: number; src: string; caption: string }[];
}

export const sketchCategories: SketchCategory[] = [
  {
    id: 1,
    slug: "timeless-memories",
    title: "Timeless Memories",
    description:
      "A heartfelt collection of illustrations inspired by the warmth of nostalgia, cherished moments, and the quiet beauty found in everyday memories.",
    cardImage: venus,
    gallery: [
      {
        id: 1,
        src: venus,
        caption: "Venus — Digital Illustration, 2022",
      },
    ],
  },
  {
    id: 2,
    slug: "demonology",
    title: "Demonology",
    description:
      "Dark and intricate illustrations exploring demons, supernatural entities, and the shadowy mythology of the occult world.",
    cardImage: kaiAngry,
    gallery: [
      {
        id: 1,
        src: kaiAngry,
        caption: "Kai Angry — Digital Illustration",
      },
    ],
  },
  {
    id: 3,
    slug: "miscellaneous",
    title: "Miscellaneous",
    description:
      "A varied collection of illustrations, designs, and experimental works spanning digital art, vector illustration, logo creation, and web design.",
    cardImage: breadDogs,
    gallery: [
      {
        id: 1,
        src: breadDogs,
        caption: "Bread Dogs — Digital Illustration",
      },
      {
        id: 2,
        src: growingFlowers,
        caption: "Growing Flowers — Digital Illustration",
      },
      {
        id: 3,
        src: princessDragon,
        caption: "A Princess And Her Dragon — Digital Illustration",
      },
      {
        id: 4,
        src: camBookmark,
        caption: "Chinese American Museum Bookmark — Digital Illustration",
      },
      {
        id: 5,
        src: inkStamp,
        caption: "Ink Bottle Stamp Design — Vector Illustration",
      },
      {
        id: 6,
        src: hollyHopper,
        caption: "Holly Hopper Clothing Brand Logo Concept — Logo Creation",
      },
      {
        id: 7,
        src: mangaStars,
        caption: "MangaStars Website — Web Design",
      },
    ],
  },
];