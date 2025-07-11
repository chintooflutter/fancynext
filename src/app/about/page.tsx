// src/app/about/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About FancyLetters.org, Fancy Text Generator Tool',
  description:
    'Discover how FancyLetters.org helps you create stylish and decorative fonts for social media and more. Learn about features, usage ideas, and benefits.',
  alternates: {
    canonical: 'https://www.fancyletters.org/about',
  },
  keywords: [
    'fancy letters',
    'fancy text generator',
    'unicode fonts',
    'cool fonts',
    'stylish text',
    'social media fonts',
    'copy paste fancy text',
  ],
  openGraph: {
    title: 'About FancyLetters.org, Fancy Text Generator Tool',
    description:
      'Discover how FancyLetters.org helps you create stylish and decorative fonts for social media and more. Learn about features, usage ideas, and benefits.',
    url: 'https://www.fancyletters.org/about',
    siteName: 'FancyLetters.org',
    images: [
      {
        url: '/fancy-letters-logo.png',
        width: 1200,
        height: 630,
        alt: 'FancyLetters.org',
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
      <h1 className="text-3xl font-bold mb-6">About Fancy Letter Generator Tool</h1>

      <p className="mb-4 text-lg text-gray-700">
        Welcome to the Fancy Letter Generator, a tool designed to add a touch of creativity and style to your text!
        Whether you are looking to enhance your social media posts, create unique headlines, or just have some fun with
        your writing, this generator has you covered.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How It Works</h2>
      <p className="mb-4 text-gray-700">
        The Fancy Letter Generator allows you to transform ordinary text into stylized and decorative fonts. You can
        input your desired text, and the generator will produce an aesthetically pleasing version with various fonts and
        styles to choose from. It is a simple and intuitive tool that requires no technical expertise.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Features:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Multiple Styles:</strong> Choose from a variety of styles, including cursive, bold, decorative, and
          more. Experiment with different fonts to find the one that suits your taste.
        </li>
        <li>
          <strong>Copy-Paste Ease:</strong> The generated fancy text is easily copy-pasteable. Simply click the copy
          button, and you are ready to use your stylish text anywhere on the web.
        </li>
        <li>
          <strong>Customization:</strong> Some styles allow for additional customization. Play with color options,
          shadow effects, and other settings to make your text truly unique.
        </li>
        <li>
          <strong>Free and Accessible:</strong> The Fancy Letter Generator is completely free to use, and there is no
          need to download or install anything. Access it from any device with an internet connection.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Why Use Fancy Text?</h2>
      <p className="mb-4 text-gray-700">
        Fancy text is a fantastic way to stand out in the online world. Whether you are an influencer, a business owner,
        or someone who just wants to add a personal touch to their messages, using stylish fonts can make your content
        more visually appealing and engaging. It is a small effort that can make a big impact.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Usage Ideas:</h2>
      <p className="mb-2 text-gray-700">Here are some creative ways you can use the Fancy Letter Generator:</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Social Media:</strong> Elevate your social media posts with eye-catching captions and hashtags.
        </li>
        <li>
          <strong>Blog Headings:</strong> Make your blog posts more visually interesting by using fancy text for
          headings and subheadings.
        </li>
        <li>
          <strong>Personal Messages:</strong> Surprise your friends and family by sending them messages in unique and
          decorative fonts.
        </li>
        <li>
          <strong>Branding:</strong> If you are a business owner, use fancy text for your brand name or slogans to create
          a memorable and distinctive brand image.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Conclusion</h2>
      <p className="text-gray-700">
        In conclusion, the Fancy Letter Generator is a fun and practical tool for anyone looking to add a bit of flair
        to their text. With its easy to use interface and diverse range of styles, it is a versatile tool that can be
        used for various purposes. Whether you are looking to make your social media posts pop or simply want to
        experiment with creative writing, give the Fancy Letter Generator a try!
      </p>
    </main>
  );
}
