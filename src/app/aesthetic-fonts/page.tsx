import { type Metadata } from 'next';
import AestheticFontClient from '@/components/AestheticFontClient';

export const generateMetadata = (): Metadata => {
  const title = 'Aesthetic Fonts Copy Paste 2025, 40+ Stylish Text';
  const description =
    'Generate aesthetic fonts copy paste with our free font converter. Get 40+ cute, soft, and dreamy styles for Instagram bios and TikTok captions.';
  const imageUrl = 'https://www.fancyletters.org/fancy-letters-logo.png';
  const url = 'https://www.fancyletters.org/aesthetic-fonts';

  return {
    title,
    description,
    keywords: [
      'aesthetic fonts',
      'aesthetic font generator',
      'cute fonts',
      'instagram fonts',
      'tumblr fonts',
      'tik tok fancy text',
      'aesthetic text copy paste',
      'soft fonts aesthetic',
      'unicode aesthetic styles',
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
          alt: 'Aesthetic Fonts Generator',
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

export default function AestheticFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold mb-6">Aesthetic Fonts Copy Paste 2025, 40+ Stylish Text</h1>
      <p className="mb-6 text-muted">
        Copy and paste beautiful aesthetic fonts. Perfect for bios, captions, usernames, and more.
      </p>

      <AestheticFontClient />
    </main>
  );
}
