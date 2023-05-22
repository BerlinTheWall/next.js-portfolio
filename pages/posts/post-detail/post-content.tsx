import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const d = {
  title: "Post 1",
  slug: "getting-started-nextjs",
  image: "getting-started-nextjs.png",
  excerpt: "Next js is good",
  date: "2015-02-01",
  content: "# this is a post"
}

function PostContent() {

  const imagePath = `/images/posts/${d.slug}/${d.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={d.title} image={imagePath} />
      <ReactMarkdown >{d.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;