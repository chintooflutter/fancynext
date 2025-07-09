import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: {
    default: 'FancyLetters.org – Stylish Text Generator',
    template: '%s | FancyLetters.org',
  },
  description: 'Generate fancy letters and Unicode fonts for free using FancyLetters.org.',
  metadataBase: new URL('https://www.fancyletters.org'),
  openGraph: {
    title: 'FancyLetters.org',
    description: 'Generate stylish fonts and text for social media, bios, and more.',
    siteName: 'FancyLetters.org',
    type: 'website',
    images: '/og-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
