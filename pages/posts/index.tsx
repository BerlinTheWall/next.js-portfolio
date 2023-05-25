import AllPosts from "@/components/posts/all-posts";
import { Post } from "@/types/post";
import { getAllPosts } from '../../lib/posts-util'

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