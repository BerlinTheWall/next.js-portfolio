import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Post } from "@/types/post";
import { getFeaturedPosts } from "../lib/posts-util";
const Dumypost: Post[] = [
  {
    title: "Post 1",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is good",
    date: "2015-02-01",
  },
  {
    title: "Post 1",
    slug: "getting-started-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is good",
    date: "2015-02-01",
  },
];

interface Props {
  posts: Post[]
}

function HomePage(props: Props) {
  return (
    <>
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
