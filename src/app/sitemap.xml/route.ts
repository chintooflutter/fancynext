import { NextResponse } from 'next/server';

export const runtime = 'edge';

export function GET() {
  const urls = [
    'https://www.fancyletters.org/',
    'https://www.fancyletters.org/about',
    'https://www.fancyletters.org/privacy',
    'https://www.fancyletters.org/contact',
    'https://www.fancyletters.org/aesthetic-fonts',
    'https://www.fancyletters.org/fortnite-fonts',
    'https://cutefonts.fancyletters.org/',
    'https://cursivefonts.fancyletters.org/',
    'https://tattoofonts.fancyletters.org/',
    // Add more as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === 'https://www.fancyletters.org/' ? '1.0' : '0.7'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
