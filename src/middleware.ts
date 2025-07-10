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

  // ✅ Skip for localhost/dev environments
  if (
    process.env.NODE_ENV !== 'production' ||
    host.includes('localhost') ||
    host.includes('0.0.0.0') ||
    host.includes('cloudworkstations.dev')
  ) {
    return NextResponse.next();
  }

  const subdomain = host.split('.')[0];
  const isMainDomain =
    host === 'fancyletters.org' || host === 'www.fancyletters.org';

  // 🚫 Block main-site-only pages on subdomains
  if (!isMainDomain && mainDomainOnlyPaths.includes(pathname)) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // ✅ Rewrite known subdomains to their respective paths
  if (validSubdomains.includes(subdomain)) {
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  // 🚫 Redirect unknown subdomains to homepage
  if (!isMainDomain && !validSubdomains.includes(subdomain)) {
    url.hostname = 'www.fancyletters.org';
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ✅ Apply to all routes except static files and internals
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico).*)'],
};
