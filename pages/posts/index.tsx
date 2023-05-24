import AllPosts from "@/components/posts/all-posts";
import { Post } from "@/types/post";
import { getAllPosts } from '../../lib/posts-util'
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

function AllPostsPage(props: Props) {
    return (<AllPosts posts={props.posts} />)
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    }
  }

}

export default AllPostsPage;