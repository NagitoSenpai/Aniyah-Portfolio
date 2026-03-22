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
    cardImage:
      "https://images.unsplash.com/photo-1604292771675-aaf065aea60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbm9zdGFsZ2ljJTIwbWVtb3JpZXMlMjBwaG90byUyMGNvbGxhZ2UlMjB3YXJtfGVufDF8fHx8MTc3Mzg2NDUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1604292771675-aaf065aea60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbm9zdGFsZ2ljJTIwbWVtb3JpZXMlMjBwaG90byUyMGNvbGxhZ2UlMjB3YXJtfGVufDF8fHx8MTc3Mzg2NDUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Warm afternoon light",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1652760539569-81cffd9d5132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwb3J0cmFpdCUyMHZpbnRhZ2UlMjBwaG90b2dyYXBoJTIwc2VwaWF8ZW58MXx8fHwxNzczODY0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "A portrait from long ago",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1767350231527-56417cfdc246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwY2hpbGRob29kJTIwbWVtb3JpZXMlMjBrZWVwc2FrZSUyMHdhcm0lMjBsaWdodHxlbnwxfHx8fDE3NzM4NjQ1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Childhood keepsakes",
      },
    ],
  },
  {
    id: 2,
    slug: "demonology",
    title: "Demonology",
    description:
      "Dark and intricate illustrations exploring demons, supernatural entities, and the shadowy mythology of the occult world.",
    cardImage:
      "https://images.unsplash.com/photo-1751712698640-788fa51db5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGVtb24lMjBvY2N1bHQlMjBpbGx1c3RyYXRpb24lMjBnb3RoaWMlMjBhcnR8ZW58MXx8fHwxNzczODY0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1751712698640-788fa51db5fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGVtb24lMjBvY2N1bHQlMjBpbGx1c3RyYXRpb24lMjBnb3RoaWMlMjBhcnR8ZW58MXx8fHwxNzczODY0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Gothic occult study",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1762968755007-7cc86ae46707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGNyZWF0dXJlJTIwbW9uc3RlciUyMHNrZXRjaCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzM4NjQ1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Dark creature sketch",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1693067823271-dcc8cf9244e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9va3klMjBzdXBlcm5hdHVyYWwlMjBkYXJrJTIwcGFpbnRpbmclMjBhcnR3b3JrfGVufDF8fHx8MTc3Mzg2NDUzNHww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Supernatural entity",
      },
    ],
  },
  {
    id: 3,
    slug: "miscellaneous",
    title: "Miscellaneous",
    description:
      "A varied collection of sketches, doodles, and experimental works that don't fit into a single theme — imaginative, playful, and free-form.",
    cardImage:
      "https://images.unsplash.com/photo-1709461745239-ab793af6be61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2hib29rJTIwbWl4ZWQlMjBkcmF3aW5ncyUyMHBlbmNpbCUyMHZhcmlvdXMlMjBhcnR8ZW58MXx8fHwxNzczODY0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1709461745239-ab793af6be61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2hib29rJTIwbWl4ZWQlMjBkcmF3aW5ncyUyMHBlbmNpbCUyMHZhcmlvdXMlMjBhcnR8ZW58MXx8fHwxNzczODY0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Mixed media sketchbook",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1758045697946-90bb095ab971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRvb2RsZSUyMGFydCUyMGNyZWF0aXZlJTIwbWlzY2VsbGFuZW91cyUyMHNrZXRjaHxlbnwxfHx8fDE3NzM4NjQ1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Abstract doodle exploration",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1611085053263-00651f764431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGltc2ljYWwlMjByYW5kb20lMjBpbGx1c3RyYXRpb25zJTIwcGxheWZ1bCUyMGRyYXdpbmd8ZW58MXx8fHwxNzczODY0NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Playful studies",
      },
    ],
  },
];
