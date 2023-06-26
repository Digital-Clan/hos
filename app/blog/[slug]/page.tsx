import { PostHeader, PostBody, PostShare, PostComments } from "@/app/components/Blog";
import { getPostBySlug } from "@/sanity/lib/util";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return (
    <main>
      <PostHeader title={post.title} date={post.date} author={post.author} />
      <PostBody image={post.coverImage} content={post.content} />
      <PostShare title={post.title} />
      <PostComments />
    </main>
  );
}
