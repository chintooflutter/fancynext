'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

type LayoutWrapperProps = {
  children: ReactNode;
};

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const showBreadcrumbs = pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional: Add <Header /> here if needed */}

      <main className="w-full max-w-5xl mx-auto px-4 pt-16 pb-12">
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </main>

      {/* Optional: Add <Footer /> here if needed */}
    </div>
  );
}
