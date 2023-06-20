import { PostHeader, PostBody, PostShare, PostComments } from "@/app/components/Blog";

export default function BlogPost() {
  return (
    <main>
      <PostHeader />
      <PostBody />
      <PostShare />
      <PostComments />
    </main>
  );
}
