import { cursiveFontStyles } from '@/data/fonts/cursivefonts';
import FontPreviewList from './FontPreviewList';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const title = 'Best Cursive Fonts Generator 2025, 20+ Styles';
  const description =
    'Generate best cursive fonts online with our free cursive font generator. Instantly copy and paste stylish cursive text for Instagram, TikTok, or design.';

  return {
    title,
    description,
    keywords: [
      'cursive fonts',
      'cursive text generator',
      'handwritten fonts',
      'fancy cursive letters',
      'copy paste cursive',
      'calligraphy fonts',
      'stylish cursive text',
      'cursive Instagram bio',
    ],
    alternates: {
      canonical: 'https://cursivefonts.fancyletters.org/',
    },
    openGraph: {
      title,
      description,
      url: 'https://cursivefonts.fancyletters.org/',
      siteName: 'FancyLetters.org',
      images: [
        {
          url: 'https://www.fancyletters.org/fancy-letters-logo.png',
          width: 1200,
          height: 630,
          alt: 'Cursive Fonts Generator',
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

export default function CursiveFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Best Cursive Fonts Generator 2025, 20+ Styles</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste beautiful cursive text from 20+ elegant styles for your bios, messages, or social posts.
      </p>
      <FontPreviewList fontStyles={cursiveFontStyles} />
    </main>
  );
}
