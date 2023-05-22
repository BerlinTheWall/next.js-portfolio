import classes from './featured-posts.module.css';
import PostGrid from '../posts/posts-grid';
import { Post } from '@/types/post';

interface Props {
    posts: Post[];
}

function FeaturedPosts(props: Props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;