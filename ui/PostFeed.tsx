import { getPosts } from "@/lib/posts";
import Post from "./Post";

export default async function PostFeed() {
  const posts = await getPosts();

  return (
    <main>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}
