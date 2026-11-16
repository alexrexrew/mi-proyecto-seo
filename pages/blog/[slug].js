import Head from "next/head";
import { posts } from "../../data/posts";

const BASE_URL = "https://mi-proyecto-seo-victor.onrender.com";

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Mi Sitio Optimizado`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`${BASE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${BASE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Publicado: {post.date}</p>
    </>
  );
}