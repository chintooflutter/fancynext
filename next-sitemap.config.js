/** @type {import('next-sitemap').IConfig} */
const customPaths = require('./sitemap-urls');

module.exports = {
  siteUrl: 'https://www.fancyletters.org',
  generateAbsoluteUrls: true,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // ✅ Exclude internal fallback routes and duplicate public paths
  exclude: [
    '/subdomain',
    '/subdomain/*',
    '/subdomain/**',
    '/cutefonts',
    '/cursivefonts',
    '/tattoofonts',
  ],

  additionalSitemaps: [
    'https://cutefonts.fancyletters.org/sitemap.xml',
    'https://cursivefonts.fancyletters.org/sitemap.xml',
    'https://tattoofonts.fancyletters.org/sitemap.xml',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.fancyletters.org/sitemap.xml',
      'https://cutefonts.fancyletters.org/sitemap.xml',
      'https://cursivefonts.fancyletters.org/sitemap.xml',
      'https://tattoofonts.fancyletters.org/sitemap.xml',
    ],
  },

  additionalPaths: async (config) => {
    const excluded = [
      'https://www.fancyletters.org/cutefonts',
      'https://www.fancyletters.org/cursivefonts',
      'https://www.fancyletters.org/tattoofonts',
    ];

    // Remove duplicates and excluded entries
    const unique = Array.from(new Set(customPaths)).filter(
      (url) => !excluded.includes(url)
    );

    return unique.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === 'https://www.fancyletters.org/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
