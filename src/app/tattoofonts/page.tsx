import { tattooFontStyles } from '@/data/fonts/tattoofonts';
import FontPreviewList from './FontPreviewList';

export const metadata = {
  title: 'Tattoo Fonts Generator 🖋️ | FancyLetters',
  description: 'Design your name or message with stylish tattoo-style fonts. Copy and paste from 20+ unique styles.',
  openGraph: {
    title: 'Tattoo Fonts Generator 🖋️',
    description:
      'Copy and paste from 20+ tattoo font styles to make your names or captions bold and creative.',
    url: 'https://tattoofonts.fancyletters.org',
    siteName: 'FancyLetters',
    images: [
      {
        url: 'https://www.fancyletters.org/og/tattoofonts.png',
        width: 1200,
        height: 630,
        alt: 'Tattoo Fonts Preview',
      },
    ],
    type: 'website',
  },
};

export default function TattooFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">
      <h1 className="text-3xl font-bold text-center mb-4">Tattoo Fonts Generator 🖋️</h1>
      <p className="text-center text-muted-foreground mb-8">
        Copy and paste from 20+ bold and stylish tattoo text styles for names, bios, or artistic captions.
      </p>
      <FontPreviewList fontStyles={tattooFontStyles} />
    </main>
  );
}
