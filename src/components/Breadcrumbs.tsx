'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

// ✅ Define prop type for custom breadcrumb items
type BreadcrumbItem = {
  name: string;
  href?: string; // optional if last item
};

type BreadcrumbsProps = {
  items?: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Hide breadcrumbs on homepage
  if (!items && segments.length === 0) return null;

  // Use URL segments if items are not passed
  const finalItems: BreadcrumbItem[] = items ?? [
    { name: 'Home', href: '/' },
    ...segments.map((segment, index) => ({
      name: formatSegment(segment),
      href:
        index !== segments.length - 1
          ? '/' + segments.slice(0, index + 1).join('/')
          : undefined,
    })),
  ];

  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        {finalItems.map((item, index) => {
          const isLast = index === finalItems.length - 1;

          return (
            <Fragment key={index}>
              {index !== 0 && <span className="text-gray-400 px-1">/</span>}
              <li>
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="hover:underline text-gray-600 capitalize"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="capitalize text-gray-700">{item.name}</span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

// Optional helper to format URL segments (e.g. aesthetic-fonts → Aesthetic Fonts)
function formatSegment(segment: string) {
  return decodeURIComponent(segment.replace(/[-_]/g, ' '));
}
