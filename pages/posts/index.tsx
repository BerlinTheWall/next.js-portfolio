import Head from "next/head";
import AllPosts from "@/components/posts/all-posts";
import { Post } from "@/types/post";
import { getAllPosts } from "../../lib/posts-util";

interface Props {
  posts: Post[];
}

function AllPostsPage(props: Props) {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
