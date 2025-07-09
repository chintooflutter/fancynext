// src/components/CategoryButtons.tsx

'use client';

import { FontCategory } from '@/data/defaultFontStyles';

type Props = {
  active: string;
  setActive: (val: string) => void;
  categories: FontCategory[];
};

export default function CategoryButtons({ active, setActive, categories }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <button
        onClick={() => setActive("All")}
        className={`px-4 py-2 rounded-full border ${
          active === "All" ? "bg-black text-white" : "bg-white"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full border ${
            active === cat ? "bg-black text-white" : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
