import Head from "next/head";

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
      <p>Aquí publicaremos artículos sobre SEO y rendimiento en Next.js.</p>
    </>
  );
}