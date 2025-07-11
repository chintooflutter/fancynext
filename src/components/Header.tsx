'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSubdomain } from '@/context/SubdomainContext';

const mainDomain = 'https://www.fancyletters.org';

export default function Header() {
  const { isSubdomain } = useSubdomain();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={isSubdomain ? `${mainDomain}${href}` : href}
      className="hover:text-blue-600"
    >
      {children}
    </a>
  );

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link
          href={isSubdomain ? `${mainDomain}/` : '/'}
          className="text-lg font-bold tracking-tight"
        >
          <span className="text-black">FancyLetters</span>
          <span className="text-blue-600">.org</span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/privacy">Privacy</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* ✅ Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 ml-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t px-4 pb-3">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/privacy">Privacy</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
