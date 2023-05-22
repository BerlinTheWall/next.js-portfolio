import AllPosts from "@/components/posts/all-posts";

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

function AllPostsPage() {
    return (<AllPosts posts={Dumypost} />)
}
export default AllPostsPage;