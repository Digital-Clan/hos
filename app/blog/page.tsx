import { Hero, PostsGrid } from "@/app/components/Blog";
import { getPosts } from "@/sanity/lib/util";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main>
      <Hero />
      <PostsGrid posts={posts} />
    </main>
  );
}
