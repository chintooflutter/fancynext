// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validSubdomains = ['cutefonts', 'cursivefonts', 'tattoofonts'];

// 🚫 These pages are ONLY allowed on the main domain
const mainDomainOnlyPaths = [
  '/about',
  '/privacy',
  '/disclaimer',
  '/contact',
  '/aesthetic-fonts',
  '/fortnite-fonts',
];

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  const subdomain = host.split('.')[0];
  const isMainDomain =
    host === 'fancyletters.org' || host === 'www.fancyletters.org';

  // ✅ Skip in dev/local mode
  if (
    process.env.NODE_ENV !== 'production' ||
    host.includes('localhost') ||
    host.includes('0.0.0.0') ||
    host.includes('cloudworkstations.dev')
  ) {
    return NextResponse.next();
  }

  // 🔁 Redirect main-domain-only pages to www.fancyletters.org
  if (!isMainDomain && mainDomainOnlyPaths.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`https://www.fancyletters.org${pathname}`)
    );
  }

  // ✅ Rewrite known subdomains to their paths
  if (validSubdomains.includes(subdomain)) {
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  // 🚫 Redirect unknown subdomains to main homepage
  if (!isMainDomain && !validSubdomains.includes(subdomain)) {
    return NextResponse.redirect(new URL('https://www.fancyletters.org/'));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico).*)'],
};
