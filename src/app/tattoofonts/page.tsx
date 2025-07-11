import { tattooFontStyles } from '@/data/fonts/tattoofonts';
import FontPreviewList from './FontPreviewList';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const title = 'Tattoo Font Generator 2025, 30+ Free Tattoo Fonts';
  const description =
    'Generate bold, script, and lettering styles with our free Tattoo Fonts Generator 2025. Explore 20+ unique tattoo fonts and copy your design instantly.';

  return {
    title,
    description,
    keywords: [
      'tattoo fonts',
      'tattoo font generator',
      'tattoo lettering fonts',
      'cursive tattoo text',
      'fonts for tattoos',
      'copy paste tattoo font',
      'tattoo name design',
      'free tattoo font styles',
    ],
    alternates: {
      canonical: 'https://tattoofonts.fancyletters.org/',
    },
    openGraph: {
      title,
      description,
      url: 'https://tattoofonts.fancyletters.org/',
      siteName: 'FancyLetters.org',
      images: [
        {
          url: 'https://www.fancyletters.org/fancy-letters-logo.png',
          width: 1200,
          height: 630,
          alt: 'Tattoo Fonts Generator',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.fancyletters.org/fancy-letters-logo.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default function TattooFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Tattoo Font Generator 2025, 30+ Free Tattoo Fonts</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste from 20+ bold and stylish tattoo text styles for names, bios, or artistic captions.
      </p>
      <FontPreviewList fontStyles={tattooFontStyles} />
    </main>
  );
}
