import { type Metadata } from 'next';
import FortniteFontClient from '@/components/FortniteFontClient';

export const generateMetadata = (): Metadata => {
  const title = 'Fortnite Fonts Generator, Stylish Text for Bios';
  const description =
    'Generate free Fortnite fonts for your gamertag, display name, or bio. Copy and paste from 20+ bold, glitchy, and unique styles that match aesthetic.';
  const imageUrl = 'https://www.fancyletters.org/fancy-letters-logo.png';
  const url = 'https://www.fancyletters.org/fortnite-fonts';

  return {
    title,
    description,
    keywords: [
      'fortnite fonts',
      'fortnite font generator',
      'gamer fonts',
      'gaming text styles',
      'fortnite stylish text',
      'unicode fortnite fonts',
      'fortnite name generator',
      'fortnite text copy paste',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'FancyLetters.org',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Fortnite Fonts Generator',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default function FortniteFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold mb-6">Fortnite Fonts Generator, Stylish Text for Bios</h1>
      <p className="mb-6 text-muted">
        Use this free Fortnite font generator to create stylish, gamer-inspired Unicode fonts for your username,
        display name, or bio. Simply type your text and copy the one you like!
      </p>

      <FortniteFontClient />
    </main>
  );
}
