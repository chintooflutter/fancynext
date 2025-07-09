'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CopyButtonProps = {
  text: string;
  isCopied?: boolean;
  onCopy?: () => void;
};

export default function CopyButton({
  text,
  isCopied,
  onCopy,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.(); // optional callback
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      alert('Clipboard copy failed. Please copy manually.');
    }
  };

  const isCopyVisible = isCopied ?? copied;

  return (
    <div className="relative inline-block">
      {/* Tooltip */}
      {isCopyVisible && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow transition-opacity duration-300 z-10">
          Copied!
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleCopy}
        className={`flex items-center gap-1 px-3 py-1 bg-foreground text-background rounded text-sm transition-all duration-200
          hover:opacity-90 active:scale-95 ${isCopyVisible ? 'animate-pulse' : ''}`}
        title="Copy to clipboard"
      >
        {isCopyVisible ? (
          <>
            <Check size={16} strokeWidth={2.5} /> Copied
          </>
        ) : (
          <>
            <Copy size={16} strokeWidth={2} /> Copy
          </>
        )}
      </button>
    </div>
  );
}
