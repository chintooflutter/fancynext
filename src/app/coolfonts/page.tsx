import { coolFontStyles } from '@/data/fonts/coolfonts';
import FontPreviewList from './FontPreviewList';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const title = 'Cool Fonts Generator 2025 – Copy & Paste Stylish Text';
  const description =
    'Use our free Cool Fonts Generator to create awesome and stylish text. Choose from 20+ cool font styles to use in Instagram, TikTok, or messages instantly.';

  return {
    title,
    description,
    keywords: [
      'cool fonts',
      'cool text generator',
      'fancy fonts',
      'copy paste cool text',
      'cool font styles',
      'stylish text generator',
      'cool letters for Instagram',
      'creative text fonts',
    ],
    alternates: {
      canonical: 'https://coolfonts.fancyletters.org/',
    },
    openGraph: {
      title,
      description,
      url: 'https://coolfonts.fancyletters.org/',
      siteName: 'FancyLetters.org',
      images: [
        {
          url: 'https://www.fancyletters.org/fancy-letters-logo.png',
          width: 1200,
          height: 630,
          alt: 'Cool Fonts Generator',
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

export default function CoolFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Cool Fonts Generator 2025 – 20+ Stylish Font Styles</h1>
      <p className="text-center text-muted-foreground mb-8">
        Create and copy amazing cool font styles with our generator. Perfect for bios, messages, social captions, and more.
      </p>
      <FontPreviewList fontStyles={coolFontStyles} />
    </main>
  );
}
