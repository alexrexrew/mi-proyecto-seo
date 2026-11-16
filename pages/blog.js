import Head from "next/head";
import Link from "next/link";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de SEO y Next.js | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos y guías sobre SEO, meta tags, sitemaps y rendimiento web con Next.js."
        />
        <meta property="og:title" content="Blog de SEO y Next.js | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Artículos y guías sobre SEO, meta tags, sitemaps y rendimiento web con Next.js."
        />
        <meta
          property="og:image"
          content="https://mi-proyecto-seo-victor.onrender.com/images/seo-image.png"
        />
        <meta property="og:url" content="https://mi-proyecto-seo-victor.onrender.com/blog" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}