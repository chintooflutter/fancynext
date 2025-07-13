import { NextResponse } from 'next/server';

export const runtime = 'edge';

export function GET() {
  const robots = `
User-agent: *
Allow: /

Disallow: /_next/
Disallow: /api/
Disallow: /404
Disallow: /500


Sitemap: https://www.fancyletters.org/sitemap.xml
Sitemap: https://cutefonts.fancyletters.org/sitemap.xml
Sitemap: https://cursivefonts.fancyletters.org/sitemap.xml
Sitemap: https://tattoofonts.fancyletters.org/sitemap.xml
`;

  return new NextResponse(robots.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
