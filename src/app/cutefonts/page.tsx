import { cuteFontStyles } from '@/data/fonts/cutefonts';
import FontPreviewList from './FontPreviewList';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const title = 'Cute Fonts Generator 2025, 30+ Free Styles';
  const description =
    'Try our free Cute Fonts Generator 2025 with 20+ adorable styles. Copy and paste cute fonts for Instagram, TikTok, or anywhere you want stylish text!';

  return {
    title,
    description,
    keywords: [
      'cute fonts',
      'cute text generator',
      'adorable fonts',
      'kawaii fonts',
      'copy paste cute letters',
      'font for instagram bio',
      'sweet font styles',
      'playful font generator',
    ],
    alternates: {
      canonical: 'https://cutefonts.fancyletters.org/',
    },
    openGraph: {
      title,
      description,
      url: 'https://cutefonts.fancyletters.org/',
      siteName: 'FancyLetters.org',
      images: [
        {
          url: 'https://www.fancyletters.org/fancy-letters-logo.png',
          width: 1200,
          height: 630,
          alt: 'Cute Fonts Generator',
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

export default function CuteFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Cute Fonts Generator 2025, 30+ Free Styles</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste from 20+ playful & adorable styles for your bios, stories, or posts.
      </p>
      <FontPreviewList fontStyles={cuteFontStyles} />
    </main>
  );
}
