// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validSubdomains = ['cutefonts', 'cursivefonts', 'tattoofonts'];

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // ✅ Fully bypass for dev environments and Firebase preview
  if (
    process.env.NODE_ENV !== 'production' || // local dev
    host.includes('localhost') ||
    host.includes('0.0.0.0') ||
    host.includes('cloudworkstations.dev') // Firebase preview
  ) {
    return NextResponse.next();
  }

  const subdomain = host.split('.')[0];

  // ✅ Rewrite valid subdomain to static page
  if (validSubdomains.includes(subdomain)) {
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  // 🚫 Redirect invalid subdomains to homepage
  if (
    host !== 'www.fancyletters.org' &&
    host !== 'fancyletters.org'
  ) {
    url.hostname = 'www.fancyletters.org';
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// ✅ Limit middleware to actual routes (not assets)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
