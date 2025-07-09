'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { subdomainPages } from '@/data/subdomainPages';
import { transformText } from '@/lib/transformText';
import CopyButton from '@/components/CopyButton';
import Head from 'next/head';

import { cutefontStyles } from '@/data/fonts/cutefonts';
import { cursivefontStyles } from '@/data/fonts/cursivefonts';
import { tattooFontStyles } from '@/data/fonts/tattoofonts';

// ✅ Create a map of subdomain → font list
const fontMap: Record<string, typeof cutefontStyles> = {
  cutefonts: cutefontStyles,
  cursivefonts: cursivefontStyles,
  tattoofonts: tattooFontStyles,
};

export default function SubdomainPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const subdomain = searchParams.get('name') ?? '';

  const config = subdomainPages[subdomain];

  useEffect(() => {
    if (!config || !fontMap[subdomain]) {
      router.replace('/');
    }
  }, [config, router, subdomain]);

  const [input, setInput] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!config || !fontMap[subdomain]) return null;

  const fontStyles = fontMap[subdomain];

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.ogImage} />
        <meta
          property="og:url"
          content={`https://${subdomain}.fancyletters.org`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          {config.title}
        </h1>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your text here..."
          className="w-full p-4 border rounded-md resize-none mb-6 text-lg bg-accent text-foreground"
          rows={3}
        />

        <div className="space-y-4">
          {fontStyles.map((font, i) => {
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
      </main>
    </>
  );
}
