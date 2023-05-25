/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import classes from './post-content.module.css';
import { Post } from '@/types/post';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
interface Props {
  post: Post; 
}

function PostContent(props: Props) {
  const { post }: Props = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  interface CustomRenderers {
    p: (paragraph: { children?: any; node?: any }) => React.ReactElement;
    code: React.ElementType<{ className: any; children: any }>;
  }
  
  interface CustomRenderersProps {
    node: ReactMarkdownProps["node"];
    children: React.ReactNode;
  }
  
  interface PostContentProps {
    post: {
      slug: string;
      image: string;
      title: string;
      content: string;
    };
  }

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} content={''} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;