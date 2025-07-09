// src/app/contact/page.tsx

export const metadata = {
    title: 'Contact | FancyLetters.org',
    description: 'Contact FancyLetters.org with your questions, ideas, or support requests.',
    keywords: ['contact', 'support', 'email', 'fancyletters.org'],
    alternates: {
      canonical: 'https://www.fancyletters.org/contact',
    },
    openGraph: {
      title: 'Contact | FancyLetters.org',
      description: 'Reach out to the creators of FancyLetters.org for support or suggestions.',
      url: 'https://www.fancyletters.org/contact',
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
  
  export default function ContactPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          We’d love to hear your feedback, ideas, or bug reports. Please email us at{' '}
          <a href="mailto:info@fancyletters.org" className="text-blue-600 underline">
            info@fancyletters.org
          </a>
          .
        </p>
      </main>
    );
  }
  