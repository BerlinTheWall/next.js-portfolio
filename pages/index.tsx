import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Post } from "@/types/post";

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

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={Dumypost} />
    </>
  );
}
export default HomePage;
