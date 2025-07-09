import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-12 pt-6 pb-8 text-sm text-center text-gray-500">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/disclaimer" className="hover:underline">
          Disclaimer
        </Link>
      </div>
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} FancyLetters.org. All rights reserved.
      </p>
    </footer>
  );
}
