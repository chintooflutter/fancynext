// src/app/contact/page.tsx

export const metadata = {
  title: 'Contact Us - Fancy Font Generator Tool',
  description: 'Get in Touch with Our Fancy Font Generator Tool. Feel free to reach out to us with any questions, suggestions, or feedback.',
  keywords: ['contact', 'support', 'email', 'fancyletters.org'],
  alternates: {
    canonical: 'https://www.fancyletters.org/contact',
  },
  openGraph: {
    title: 'Contact Us - Fancy Font Generator Tool',
    description: 'Get in Touch with Our Fancy Font Generator Tool. Feel free to reach out to us with any questions, suggestions, or feedback.',
    url: 'https://www.fancyletters.org/contact',
    siteName: 'FancyLetters.org',
    images: [
      {
        url: '/fancy-letters-logo.png',
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
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Get in Touch with Our Fancy Font Generator Tool</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-4">
          Are you passionate about creative typography and expressive fonts? Our Fancy Font Generator Tool is designed to add
          a touch of style and uniqueness to your text, making your content stand out. Whether you are a designer, content
          creator, or someone who loves experimenting with different fonts, we would love to hear from you!
        </p>
        <p className="mb-4">
          Feel free to reach out to us with any questions, suggestions, or feedback. We value your input and are here to
          assist you in making the most of our Fancy Font Generator Tool.
        </p>
        <p className="mb-2">
          <strong>Email:</strong>{' '}
          <a href="mailto:info@fancyletters.org" className="text-blue-600 underline">
            info@fancyletters.org
          </a>
        </p>
        <p><strong>Phone:</strong> Your Phone Number</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
        <p className="mb-4">
          If you encounter any issues or need assistance while using our Fancy Font Generator Tool, our dedicated customer
          support team is ready to help. Do not hesitate to contact us for prompt and friendly assistance.
        </p>
        <p className="mb-2">
          <strong>Email:</strong>{' '}
          <a href="mailto:info@fancyletters.org" className="text-blue-600 underline">
            info@fancyletters.org
          </a>
        </p>
        <p><strong>Phone:</strong> Support Phone Number</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Social Media</h2>
        <p className="mb-4">
          Connect with us on social media to stay updated on the latest features, fonts, and creative uses of our Fancy Font
          Generator Tool.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Instagram:</strong>{' '}
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Your Instagram Handle
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Collaboration Opportunities</h2>
        <p className="mb-4">
          Are you interested in collaborating with us or featuring our Fancy Font Generator Tool on your platform? We welcome
          partnership opportunities and are open to collaborations that celebrate creativity and innovative design.
        </p>
        <p>
          <strong>Partnership Inquiries:</strong>{' '}
          <a href="mailto:info@fancyletters.org" className="text-blue-600 underline">
            info@fancyletters.org
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Feedback and Suggestions</h2>
        <p className="mb-4">
          Your feedback is crucial in helping us improve our Fancy Font Generator Tool. If you have suggestions for new
          features, fonts, or improvements, we want to hear from you!
        </p>
        <p className="mb-4">
          <strong>Email us:</strong>{' '}
          <a href="mailto:info@fancyletters.org" className="text-blue-600 underline">
            info@fancyletters.org
          </a>
        </p>
        <p>
          We appreciate your interest in our Fancy Font Generator Tool and look forward to connecting with you. Let is create
          beautiful, stylish, and unique text together!
        </p>
      </section>
    </main>
  );
}
