import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap'  });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap'  });

export const metadata: Metadata = {
  title: {
    default: 'Fancy Letters Generator 2025, FancyLetters.org',
    template: '%s | FancyLetters.org',
  },
  description: 'Use fancy letters generator copy and paste for 2025. fancyletters.org is website with symbols and characters. Best online tool for write alphabet.',
  metadataBase: new URL('https://www.fancyletters.org'),
  openGraph: {
    title: 'Fancy Letters Generator 2025, FancyLetters.org',
    description: 'Use fancy letters generator copy and paste for 2025. fancyletters.org is website with symbols and characters. Best online tool for write alphabet.',
    siteName: 'FancyLetters.org',
    type: 'website',
    images: '/fancy-letters-logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="fancy letters, stylish text, unicode fonts, cool fonts, text generator, copy paste fonts" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
