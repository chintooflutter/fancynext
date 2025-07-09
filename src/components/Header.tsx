// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo Left */}
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="text-black">FancyLetters</span><span className="text-blue-600">.org</span>
        </Link>

        {/* ✅ Nav Right (desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
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
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/privacy" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Privacy</Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
