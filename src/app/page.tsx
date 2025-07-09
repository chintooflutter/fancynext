'use client';

import { useState } from 'react';
import { defaultFontStyles } from '@/data/defaultFontStyles';
import { transformText } from '@/lib/transformText';
import CopyButton from '@/components/CopyButton';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(defaultFontStyles.map(f => f.category)))];

  const fontStyles = defaultFontStyles.filter((style) =>
    activeCategory === 'All' ? true : style.category === activeCategory
  );

  return (
    <main className="px-4 py-10 max-w-3xl lg:max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-2">
        Fancy Letters Generator
      </h1>

      {/* Tagline */}
      <p className="text-center text-muted-foreground mb-8 text-sm sm:text-base">
        Create beautiful and stylish Unicode fonts for your Instagram bio, social handles, and more.
      </p>

      {/* Input Box */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your text here..."
        className="w-full p-4 border rounded-md resize-none mb-6 text-lg bg-accent text-foreground"
        rows={3}
      />

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-sm rounded-full border transition whitespace-nowrap ${
              cat === activeCategory
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground border-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Font Previews */}
      <div className="space-y-8"> {/* Adds 2 line spacing (approx 2rem) */}
        {fontStyles.map((font) => {
          const output = transformText(input || font.preview, font.style);
          return (
            <div
              key={font.name}
              className="flex items-center justify-between gap-4 border rounded-md p-3 bg-accent"
            >
              <span className="truncate font-medium text-lg">{output}</span>
              <CopyButton text={output} />
            </div>
          );
        })}

        {fontStyles.length === 0 && (
          <p className="text-center text-muted-foreground">No fonts found in this category.</p>
        )}
      </div>
    </main>
  );
}
