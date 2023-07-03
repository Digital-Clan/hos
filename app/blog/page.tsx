import { Hero, PostsGrid } from "@/app/components/Blog";
import { getPosts } from "@/sanity/lib/util";

export const metadata = {
  title: "Blog - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export const revalidate = 30;

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main>
      <Hero />
      <PostsGrid posts={posts} />
    </main>
  );
}
