'use client';

import Link from 'next/link';
import {
  Info,
  ShieldCheck,
  ScrollText,
  Star,
  Gamepad2,
  Heart,
} from 'lucide-react';
import { useSubdomain } from '@/context/SubdomainContext';

const mainDomain = 'https://www.fancyletters.org';

export default function Footer() {
  const { isSubdomain } = useSubdomain();

  const NavLink = ({
    href,
    children,
    className = '',
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) =>
    isSubdomain ? (
      <a href={`${mainDomain}${href}`} className={className}>
        {children}
      </a>
    ) : (
      <Link href={href} className={className}>
        {children}
      </Link>
    );

  return (
    <footer className="border-t mt-12 pt-6 pb-8 text-sm text-center text-gray-500">
      <div className="flex flex-wrap justify-center gap-12 mb-4 text-left max-w-5xl mx-auto">
        {/* Column 1 */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2 text-gray-600">Site Links</h4>
          <ul className="space-y-1">
            <li>
              <NavLink href="/about" className="hover:underline flex items-center gap-1.5">
                <Info className="h-4 w-4 text-gray-400" /> About
              </NavLink>
            </li>
            <li>
              <NavLink href="/privacy" className="hover:underline flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gray-400" /> Privacy
              </NavLink>
            </li>
            <li>
              <NavLink href="/disclaimer" className="hover:underline flex items-center gap-1.5">
                <ScrollText className="h-4 w-4 text-gray-400" /> Disclaimer
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[200px]">
          <h4 className="font-semibold mb-2 text-gray-600">Popular Fonts</h4>
          <ul className="space-y-1">
            <li>
              <NavLink href="/aesthetic-fonts" className="hover:underline flex items-center gap-1.5">
                <Star className="h-4 w-4 text-pink-400" /> Aesthetic Fonts
              </NavLink>
            </li>
            <li>
              <NavLink href="/fortnite-fonts" className="hover:underline flex items-center gap-1.5">
                <Gamepad2 className="h-4 w-4 text-indigo-400" /> Fortnite Fonts
              </NavLink>
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
