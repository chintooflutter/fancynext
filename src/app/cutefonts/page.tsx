import { cuteFontStyles } from '@/data/fonts/cutefonts';
import FontPreviewList from './FontPreviewList';

export const metadata = {
  title: 'Cute Fonts Generator ✨ | FancyLetters',
  description:
    'Generate adorable, playful, and kawaii-style cute fonts for social media, bios, captions, and more!',
  openGraph: {
    title: 'Cute Fonts Generator ✨',
    description:
      'Copy and paste from 20+ cute font styles instantly. Perfect for bios, stories, and aesthetic posts.',
    url: 'https://cutefonts.fancyletters.org',
    siteName: 'FancyLetters',
    images: [
      {
        url: 'https://www.fancyletters.org/og/cutefonts.png',
        width: 1200,
        height: 630,
        alt: 'Cute Fonts Preview',
      },
    ],
    type: 'website',
  },
};

export default function CuteFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Cute Fonts Generator ✨</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste from 20+ playful & adorable styles for your bios, stories, or posts.
      </p>
      <FontPreviewList fontStyles={cuteFontStyles} />
    </main>
  );
}
