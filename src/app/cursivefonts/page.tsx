import { cursiveFontStyles } from '@/data/fonts/cursivefonts';
import FontPreviewList from './FontPreviewList';

export const metadata = {
  title: 'Cursive Fonts Generator ✒️ | FancyLetters',
  description:
    'Generate elegant cursive Unicode fonts for stylish bios, captions, and posts. Copy & paste beautiful cursive text.',
  openGraph: {
    title: 'Cursive Fonts Generator ✒️',
    description:
      'Explore and copy from 20+ elegant cursive font styles. Perfect for bios, stories, and aesthetic social media posts.',
    url: 'https://cursivefonts.fancyletters.org',
    siteName: 'FancyLetters',
    images: [
      {
        url: 'https://www.fancyletters.org/og/cursivefonts.png',
        width: 1200,
        height: 630,
        alt: 'Cursive Fonts Preview',
      },
    ],
    type: 'website',
  },
};

export default function CursiveFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Cursive Fonts Generator ✒️</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste beautiful cursive text from 20+ elegant styles for your bios, messages, or social posts.
      </p>
      <FontPreviewList fontStyles={cursiveFontStyles} />
    </main>
  );
}
