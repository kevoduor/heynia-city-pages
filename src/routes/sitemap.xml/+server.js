import { cities } from '$lib/cities';

export const GET = async () => {
  const baseUrl = 'https://pages.heynia.com';

  const pages = cities.map((city) => {
    return `
      <url>
        <loc>${baseUrl}/${city.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    ${pages.join('\n')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};

