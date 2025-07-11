export const metadata = {
  title: 'Privacy Policy | FancyLetters.org',
  description: 'Read the privacy policy of FancyLetters.org. We respect your data and do not collect personal information.',
  keywords: ['privacy', 'policy', 'fancyletters.org'],
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

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-6">Last updated: December 13, 2023</p>

      <p className="mb-4">
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
        when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p className="mb-4">
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and
        use of information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Interpretation and Definitions</h2>
      <h3 className="text-xl font-medium mt-6 mb-2">Interpretation</h3>
      <p className="mb-4">
        The words with initial capital letters have meanings defined under the following conditions. These definitions apply
        regardless of whether they appear in singular or plural.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Definitions</h3>
      <p className="mb-4">For the purposes of this Privacy Policy:</p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Account</strong> – A unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> – Any entity that controls, is controlled by or is under common control with Us.</li>
        <li><strong>Company</strong> – Refers to FancyLetters.org (We, Us, Our).</li>
        <li><strong>Cookies</strong> – Small files placed on Your device containing browsing history and other data.</li>
        <li><strong>Device</strong> – Any device that can access the Service (computer, mobile, tablet).</li>
        <li><strong>Personal Data</strong> – Any information relating to an identified or identifiable individual.</li>
        <li><strong>Service</strong> – Refers to the FancyLetters.org website.</li>
        <li><strong>Service Provider</strong> – Any party processing data on behalf of the Company.</li>
        <li><strong>Usage Data</strong> – Data collected automatically (e.g. pages visited, duration).</li>
        <li><strong>Website</strong> – FancyLetters.org, accessible at <a className="text-blue-600 underline" href="https://www.fancyletters.org" target="_blank">fancyletters.org</a>.</li>
        <li><strong>You</strong> – The individual using the Service or the legal entity on whose behalf it is used.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Collecting and Using Your Personal Data</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Types of Data Collected</h3>
      <h4 className="text-lg font-semibold mb-1">Personal Data</h4>
      <p className="mb-4">We may collect personally identifiable information such as Usage Data.</p>

      <h4 className="text-lg font-semibold mb-1">Usage Data</h4>
      <p className="mb-4">
        Usage Data may include IP address, browser type, device identifiers, visited pages, time spent, and diagnostics.
      </p>

      <h4 className="text-lg font-semibold mb-1">Tracking Technologies and Cookies</h4>
      <p className="mb-4">
        We use cookies and similar tracking technologies like web beacons and scripts to improve and analyze our service.
      </p>

      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Essential Cookies</strong> – Needed for authentication and core functionality.</li>
        <li><strong>Acceptance Cookies</strong> – Identify if users have accepted cookie usage.</li>
        <li><strong>Functionality Cookies</strong> – Store preferences like language or login details.</li>
      </ul>

      <p className="mb-6">For more details, visit our Cookie Policy or relevant sections of this Privacy Policy.</p>

      <h3 className="text-xl font-medium mt-8 mb-2">Use of Your Personal Data</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>To provide and maintain our Service</li>
        <li>To manage Your Account</li>
        <li>To fulfill contracts and deliver services</li>
        <li>To contact You for updates, offers, or service-related communication</li>
        <li>To manage user requests and support</li>
        <li>To conduct business transfers or service improvements</li>
        <li>To analyze data, trends, and marketing effectiveness</li>
      </ul>

      <h3 className="text-xl font-medium mt-8 mb-2">Retention of Your Personal Data</h3>
      <p className="mb-4">
        We retain Your data only as long as needed to fulfill legal obligations, resolve disputes, and enforce agreements.
      </p>

      <h3 className="text-xl font-medium mt-8 mb-2">Transfer of Your Personal Data</h3>
      <p className="mb-4">
        Your information may be processed outside your region. By submitting data, you agree to its secure transfer.
      </p>

      <h3 className="text-xl font-medium mt-8 mb-2">Delete Your Personal Data</h3>
      <p className="mb-4">
        You can request data deletion by contacting us. We may retain some data if required by law or legitimate interest.
      </p>

      <h3 className="text-xl font-medium mt-8 mb-2">Disclosure of Your Personal Data</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>To comply with legal obligations</li>
        <li>To protect and defend our rights</li>
        <li>To prevent fraud or potential harm</li>
        <li>During business transactions</li>
        <li>With Your explicit consent</li>
      </ul>

      <h3 className="text-xl font-medium mt-8 mb-2">Security of Your Personal Data</h3>
      <p className="mb-6">
        We strive to protect Your data, but no method of transmission is 100% secure. Use the service at your discretion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Children’s Privacy</h2>
      <p className="mb-6">
        We do not knowingly collect data from anyone under 13. If we learn that we have, we’ll promptly delete it.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Links to Other Websites</h2>
      <p className="mb-6">
        Our site may link to third-party sites. We do not control or take responsibility for their privacy practices.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy. Changes will be posted on this page with the updated date.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Contact Us</h2>
      <p className="mb-2">If you have any questions, contact us:</p>
      <ul className="list-disc pl-5">
        <li>Email: <a className="text-blue-600 underline" href="mailto:info@fancyletters.org">info@fancyletters.org</a></li>
      </ul>
    </main>
  );
}
