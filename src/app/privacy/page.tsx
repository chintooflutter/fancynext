// src/app/privacy/page.tsx

export const metadata = {
    title: 'Privacy Policy | FancyLetters.org',
    description: 'Read the privacy policy of FancyLetters.org. We do not collect or store your personal information.',
    keywords: ['privacy', 'policy', 'fancyletters.org', 'data', 'personal information'],
    alternates: {
      canonical: 'https://www.fancyletters.org/privacy',
    },
    openGraph: {
      title: 'Privacy Policy | FancyLetters.org',
      description: 'FancyLetters.org respects your privacy. We don’t collect or store any personal data.',
      url: 'https://www.fancyletters.org/privacy',
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
  
  export default function PrivacyPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          FancyLetters.org does not collect or store any user data. All font conversions happen locally in your browser. We don’t use tracking cookies, analytics scripts, or third-party data collection services.
        </p>
      </main>
    );
  }
  