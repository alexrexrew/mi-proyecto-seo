import { posts } from "../../data/posts";

const BASE_URL = "https://mi-proyecto-seo-victor.onrender.com";

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];

  const staticEntries = staticUrls.map(
    (url) => `<url><loc>${BASE_URL}${url}</loc></url>`
  );

  const postEntries = posts.map(
    (p) =>
      `<url><loc>${BASE_URL}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod></url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...postEntries].join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}