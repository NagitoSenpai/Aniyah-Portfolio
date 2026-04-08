import breadDogs from "figma:asset/2cedbc413a5ea9e7f83f6dc1fbf0289da3fe22f5.png";
import growingFlowers from "figma:asset/3f8c013230bd3b6a5c68bf0e44bdfd6d020369a9.png";
import princessDragon from "figma:asset/37fbb86477c8586f5372b2cb269acb898d52304f.png";
import camBookmark from "figma:asset/e6f23999a47db9dad4553ac8f074fc6bd6b33cb6.png";
import inkStamp from "figma:asset/67ad3730cad925a15edf0e1154fdc795b444bf26.png";
import inkStampMockup from "figma:asset/184f6a4f5f2eb93c6d5f4dab12acf8cf4da533a7.png";
import hollyHopper from "figma:asset/b582dad507b3829c7f856fb899483c663ed6efe8.png";
import hollyHopperSweatshirt from "figma:asset/5a07a6113761ab43ca653151b23837d47da17668.png";
import mangaStars from "figma:asset/b1ac13e65859f764af276555fbdba28c2a49ed34.png";
import kaiAngry from "figma:asset/1e3a1ccffb95cf981cc8378a85f412551689a397.png";

import venus from "figma:asset/cf017d7cf0d8a77eefc4e334b1b641a79a5696be.png";

import ryeFront from "figma:asset/84e72644aea687910c9e9b0d32cac60bd7325946.png";
import ryeSide1 from "figma:asset/fd1e5c44591f11f06a2208dd5bab4166bb3fb65a.png";
import ryeBack from "figma:asset/502bb2c7c62ec4c4a4aaf513b69800db54056959.png";
import ryeSide2 from "figma:asset/1d9faf45c502d9afa6f70ee5cb744a0a63b793c5.png";

import rollFront from "figma:asset/5dcb449e3a9f32856347182b9901a9da22423929.png";
import rollSide from "figma:asset/e44f3658cac6bb2e6aa1fa44fe9a02391555a40d.png";
import rollBack from "figma:asset/a3ede1e01b56973a9416fcfe06d84672bd93d659.png";
import rollAlt from "figma:asset/c852753a6b810fab269cb9af9e39dfb1f5772121.png";

import pitaImg1 from "figma:asset/bc82eb030a0b11b91b11e2f9ebc1cc893a0e4bcf.png";
import pitaImg2 from "figma:asset/494afd4e8353bfd2df79fec666f6f0871f20faa3.png";
import pitaImg3 from "figma:asset/69403de15e664d28725f05347f05c93bdf940121.png";
import pitaImg4 from "figma:asset/8d95a8be4c2ef1d79c01ce86284f25859bf4259f.png";

export interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  prototypeLink?: string;
  /** If present, this item renders as a slideshow */
  slides?: { src: string; label?: string }[];
}

export interface SketchCategory {
  id: number;
  slug: string;
  title: string;
  description: string;
  cardImage: string;
  gallery: GalleryImage[];
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
      "A scientist at Ophelia University unexpectedly falls for one of his demon test subjects, forcing him to question his purpose and humanity.",
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
        src: inkStampMockup,
        caption: "Ink Bottle Stamp Design — Vector Illustration",
        slides: [
          { src: inkStampMockup, label: "Mockup" },
          { src: inkStamp, label: "Design" },
        ],
      },
      {
        id: 6,
        src: hollyHopperSweatshirt,
        caption: "Holly Hopper Clothing Brand Logo Concept — Logo Creation",
        slides: [
          { src: hollyHopperSweatshirt, label: "Sweatshirt Mockup" },
          { src: hollyHopper, label: "Logo" },
        ],
      },
      {
        id: 7,
        src: mangaStars,
        caption: "MangaStars Website — Web Design",
        prototypeLink: "https://xd.adobe.com/view/fbc88819-b9a7-4cab-a18f-7c09ad77867a-ae9b/",
      },
      {
        id: 8,
        src: ryeFront,
        caption: "Bread Dogs: Rye — Clay Figurine",
        slides: [
          { src: ryeFront, label: "Front" },
          { src: ryeSide1, label: "Side" },
          { src: ryeBack, label: "Back" },
          { src: ryeSide2, label: "Side (Alt)" },
        ],
      },
      {
        id: 9,
        src: rollFront,
        caption: "Bread Dogs: Roll — Clay Figurine",
        slides: [
          { src: rollFront, label: "Front" },
          { src: rollSide, label: "Side" },
          { src: rollBack, label: "Back" },
          { src: rollAlt, label: "Alt" },
        ],
      },
      {
        id: 10,
        src: pitaImg4,
        caption: "Bread Dogs: Pita — Clay Figurine",
        slides: [
          { src: pitaImg4, label: "Front" },
          { src: pitaImg3, label: "Side" },
          { src: pitaImg1, label: "Back" },
        ],
      },
    ],
  },
];