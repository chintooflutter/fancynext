'use client';

import { useState } from 'react';
import { defaultFontStyles } from '@/data/defaultFontStyles';
import { transformText } from '@/lib/transformText';
import CopyButton from './CopyButton';

const categories = ['All', ...Array.from(new Set(defaultFontStyles.map(f => f.category)))] as const;

export default function DefaultFontGrid() {
  const [input, setInput] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredFonts =
    activeCategory === 'All'
      ? defaultFontStyles
      : defaultFontStyles.filter((font) => font.category === activeCategory);

  return (
    <div>
      {/* Text Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your text here..."
        className="w-full p-4 border rounded-md resize-none mb-6 text-lg bg-accent text-foreground"
        rows={3}
      />

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1 text-sm rounded-full border transition ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-muted text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Font Style Previews */}
      <div className="space-y-4">
        {filteredFonts.map((font, index) => {
          const output = transformText(input || font.preview, font.style);
          return (
            <div
              key={font.name}
              className="flex items-center justify-between gap-4 border rounded-md p-3 bg-accent"
            >
              <span className="truncate font-medium text-lg">{output}</span>
              <CopyButton
                text={output}
                onCopy={() => {
                  navigator.clipboard.writeText(output);
                  setCopiedIndex(index);
                  setTimeout(() => setCopiedIndex(null), 1500);
                }}
                isCopied={copiedIndex === index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
