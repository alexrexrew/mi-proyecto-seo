import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>SEO y Rendimiento en Next.js | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Aprende SEO y optimización de rendimiento en Next.js: meta tags, sitemaps, imágenes y fuentes."
        />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="SEO y Rendimiento en Next.js | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar tu web con Next.js."
        />
        <meta
          property="og:image"
          content="https://mi-proyecto-seo-victor.onrender.com/images/seo-image.png"
        />
        <meta property="og:url" content="https://mi-proyecto-seo-victor.onrender.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />

      <DynamicComponent />
    </>
  );
}