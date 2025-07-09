// src/components/Design.tsx

'use client';

import { useState } from 'react';
import CopyButton from './CopyButton';
import CategoryButtons from './CategoryButtons';
import { transformText } from '@/lib/transformText';
import { defaultFontStyles } from '@/data/defaultFontStyles';

type FontStyle = (typeof defaultFontStyles)[number];

export default function Design({ fontStyles }: { fontStyles: FontStyle[] }) {
  const [input, setInput] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = Array.from(new Set(fontStyles.map(f => f.category)));

  const filtered = activeCategory === 'All'
    ? fontStyles
    : fontStyles.filter(f => f.category === activeCategory);

  return (
    <div className="w-full max-w-3xl mt-10">
      <input
        type="text"
        placeholder="Type something fancy..."
        className="w-full px-4 py-3 border rounded-xl text-lg mb-6"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <CategoryButtons
        active={activeCategory}
        setActive={setActiveCategory}
        categories={categories}
      />

      <div className="space-y-4">
        {filtered.map((font, index) => {
          const transformed = input
            ? transformText(input, font.style)
            : font.preview;
          return (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm flex flex-col gap-2 bg-white"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{font.name}</span>
                <CopyButton text={transformed} />
              </div>
              <div className="text-xl break-words">{transformed}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
