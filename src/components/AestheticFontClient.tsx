'use client';

import { useState } from 'react';
import { aestheticFontStyles } from '@/data/fonts/aesthetic';
import { transformText } from '@/lib/transformText';
import CopyButton from '@/components/CopyButton';

export default function AestheticFontClient() {
  const [input, setInput] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your text here..."
        className="w-full p-4 border rounded-md resize-none mb-6 text-lg bg-accent text-foreground"
        rows={3}
      />

      <div className="space-y-4">
        {aestheticFontStyles.map((font, i) => {
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
                  setCopiedIndex(i);
                  setTimeout(() => setCopiedIndex(null), 1500);
                }}
                isCopied={copiedIndex === i}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
