'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    const isSub = host !== 'fancyletters.org' && host !== 'www.fancyletters.org';
    setIsSubdomain(isSub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mainDomain = 'https://www.fancyletters.org';

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
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
        {/* ✅ Logo Left */}
        <Link href={isSubdomain ? `${mainDomain}/` : '/'} className="text-lg font-bold tracking-tight">
          <span className="text-black">FancyLetters</span><span className="text-blue-600">.org</span>
        </Link>

        {/* ✅ Nav Right (desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/privacy">Privacy</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* ✅ Hamburger (mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 ml-2">
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
