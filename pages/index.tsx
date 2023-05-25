import FeaturedPosts from "@/components/home-page/featured-posts";
import Head from "next/head";
import Hero from "@/components/home-page/hero";
import { Post } from "@/types/post";
import { getFeaturedPosts } from "../lib/posts-util";

interface Props {
  posts: Post[]
}

function HomePage(props: Props) {
  return (
    <>
      <Head>
        <meta name="description" content="Web programming blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
