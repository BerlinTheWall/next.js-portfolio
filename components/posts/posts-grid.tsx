import { Post } from "@/types/post";
import PostItem from "./post-item";
import classes from './post-grid.module.css';
interface Props {
    posts: Post[];
  }

function PostGrid(props: Props) {
    const { posts } = props;
    return (
      <ul className={classes.grid}>
        {posts.map((post) => (
          <PostItem {...post} key={post.slug} />
        ))}
      </ul>
    );
  }
  
  export default PostGrid;