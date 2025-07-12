'use client';

import {
  Info,
  ShieldCheck,
  ScrollText,
  Star,
  Gamepad2,
  Heart,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t mt-12 pt-6 pb-8 text-sm text-center text-gray-500">
      <div className="flex flex-wrap justify-center gap-12 mb-4 text-left max-w-5xl mx-auto">
        {/* Column 1 */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2 text-gray-600">Site Links</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.fancyletters.org/about"
                className="hover:underline flex items-center gap-1.5"
              >
                <Info className="h-4 w-4 text-gray-400" /> About
              </a>
            </li>
            <li>
              <a
                href="https://www.fancyletters.org/privacy"
                className="hover:underline flex items-center gap-1.5"
              >
                <ShieldCheck className="h-4 w-4 text-gray-400" /> Privacy
              </a>
            </li>
            <li>
              <a
                href="https://www.fancyletters.org/disclaimer"
                className="hover:underline flex items-center gap-1.5"
              >
                <ScrollText className="h-4 w-4 text-gray-400" /> Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[200px]">
          <h4 className="font-semibold mb-2 text-gray-600">Popular Fonts</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.fancyletters.org/aesthetic-fonts"
                className="hover:underline flex items-center gap-1.5"
              >
                <Star className="h-4 w-4 text-pink-400" /> Aesthetic Fonts
              </a>
            </li>
            <li>
              <a
                href="https://www.fancyletters.org/fortnite-fonts"
                className="hover:underline flex items-center gap-1.5"
              >
                <Gamepad2 className="h-4 w-4 text-indigo-400" /> Fortnite Fonts
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="min-w-[220px]">
          <h4 className="font-semibold mb-2 text-gray-600">Connect With Us</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.instagram.com/fancyletters_org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5"
              >
                <Heart className="h-4 w-4 text-pink-500" />
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} FancyLetters.org. All rights reserved.
      </p>
    </footer>
  );
}
