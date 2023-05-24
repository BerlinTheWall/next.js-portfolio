import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';
import { Post } from '@/types/post';
interface Props {
  post: Post; 
}

function PostContent(props: Props) {
  const { post }: Props = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown >{post.title}</ReactMarkdown>
    </article>
  );
}

export default PostContent;