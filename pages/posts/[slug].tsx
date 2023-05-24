import { getPostData, getPostsFiles } from "@/lib/posts-util";
import PostContent from "./post-detail/post-content";
import { Post } from "@/types/post";

interface Prop {
  post: Post;
}

function PostDetailPage(props: Prop) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
