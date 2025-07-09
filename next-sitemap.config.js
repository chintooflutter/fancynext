/** @type {import('next-sitemap').IConfig} */
const customPaths = require('./sitemap-urls'); // Optional: if using static custom paths

module.exports = {
  siteUrl: 'https://www.fancyletters.org',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  exclude: ['/server-sitemap.xml'],

  // 🗂 Include sitemaps for known subdomains
  additionalSitemaps: [
    'https://cutefonts.fancyletters.org/sitemap.xml',
    'https://tattoofonts.fancyletters.org/sitemap.xml',
    'https://zalgotext.fancyletters.org/sitemap.xml',
    // Add more subdomains here
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
      'https://tattoofonts.fancyletters.org/sitemap.xml',
      'https://zalgotext.fancyletters.org/sitemap.xml',
    ],
  },
};
