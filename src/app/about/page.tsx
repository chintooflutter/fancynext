// src/app/about/page.tsx


export const metadata = {
    title: 'About | FancyLetters.org',
    description: 'Learn more about FancyLetters.org – the best free stylish text generator using Unicode fancy fonts.',
    keywords: ['fancy letters', 'stylish fonts', 'unicode text', 'text generator', 'fancy text online'],
    alternates: {
      canonical: 'https://www.fancyletters.org/about',
    },
    openGraph: {
      title: 'About | FancyLetters.org',
      description: 'Learn more about FancyLetters.org – the best free stylish text generator.',
      url: 'https://www.fancyletters.org/about',
      siteName: 'FancyLetters.org',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'FancyLetters.org – Stylish Font Generator',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
  
  export default function AboutPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About FancyLetters.org</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          FancyLetters.org is a free online tool that helps you generate stylish and aesthetic fonts using Unicode characters. You can copy and paste beautiful fonts for social media bios, usernames, Instagram captions, and more.
        </p>
      </main>
    );
  }
  