import { Metadata } from 'next';
import FortniteFontClient from '@/components/FortniteFontClient';

export const metadata: Metadata = {
  title: 'Fortnite Fonts Generator',
  description: 'Transform your text into cool Fortnite-style fonts for social media, gaming handles, and more!',
  openGraph: {
    title: 'Fortnite Fonts Generator',
    description: 'Transform your text into cool Fortnite-style fonts for social media, gaming handles, and more!',
    url: 'https://www.fancyletters.org/fortnite-fonts',
    images: [{ url: '/og/fortnite-fonts.png' }],
  },
};

export default function FortniteFontsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-12">      
      <h1 className="text-3xl font-bold mb-6">Fortnite Fonts Generator</h1>
      <p className="mb-6 text-muted">
        Use this free Fortnite font generator to create stylish, gamer-inspired Unicode fonts for your username,
        display name, or bio. Simply type your text and copy the one you like!
      </p>

      <FortniteFontClient />
    </main>
  );
}
