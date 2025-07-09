import { Metadata } from 'next';
import AestheticFontClient from '@/components/AestheticFontClient';

export const metadata: Metadata = {
  title: 'Aesthetic Fonts Generator – FancyLetters.org',
  description:
    'Generate beautiful aesthetic fonts and cute text styles for Instagram, Tumblr, TikTok and more using our aesthetic font converter.',
  openGraph: {
    title: 'Aesthetic Fonts Generator – FancyLetters.org',
    description:
      'Generate beautiful aesthetic fonts and cute text styles for Instagram, Tumblr, TikTok and more using our aesthetic font converter.',
    url: 'https://www.fancyletters.org/aesthetic-fonts',
    images: [
      {
        url: '/og/aesthetic-fonts.png',
        width: 1200,
        height: 630,
        alt: 'Aesthetic Fonts Generator',
      },
    ],
  },
};

export default function AestheticFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">    
      <h1 className="text-3xl font-bold mb-6">Aesthetic Fonts Generator</h1>
      <p className="mb-6 text-muted">
        Copy and paste beautiful aesthetic fonts. Perfect for bios, captions, usernames, and more.
      </p>

      {/* 👇 Add interactive input + previews here */}
      <AestheticFontClient />
    </main>
  );
}
