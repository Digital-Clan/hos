import { PostHeader, PostBody, PostShare, PostComments } from "@/app/components/Blog";
import { getPostBySlug } from "@/sanity/lib/util";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export const revalidate = 30;

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
