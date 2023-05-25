import Image from 'next/image';

import classes from './post-header.module.css';
import { Post } from '@/types/post';

function PostHeader(props: Post) {
  const { title, image, content } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;