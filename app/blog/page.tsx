import { getPosts } from "@/lib/posts";
import Post from "@/ui/Post";

export default async function Blogs() {
  const posts = await getPosts();

  return (
    <section className="gap-4 flex flex-col">
      {/* This content will be sent to the client immediately */}
      <header>
        <h1 className="font-bold text-4xl">Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </main>
    </section>
  );
}
