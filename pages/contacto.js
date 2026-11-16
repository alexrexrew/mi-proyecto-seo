import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Contáctanos para consultas sobre optimización SEO y desarrollo web con Next.js."
        />
        <meta property="og:title" content="Contacto | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Contáctanos para consultas sobre optimización SEO y desarrollo web con Next.js."
        />
        <meta
          property="og:image"
          content="https://mi-proyecto-seo-victor.onrender.com/images/seo-image.png"
        />
        <meta property="og:url" content="https://mi-proyecto-seo-victor.onrender.com/contacto" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>Escríbenos para resolver tus dudas sobre SEO y Next.js.</p>
    </>
  );
}