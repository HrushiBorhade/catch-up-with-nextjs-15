import { Suspense } from "react";
import BlogInfo from "@/ui/BlogInfo";
import PostFeed from "@/ui/PostFeed";

export default async function Blogs() {
  return (
    <section className="gap-4 flex flex-col">
      {/* This content will be sent to the client immediately */}
      <header>
        <h1 className="font-bold text-4xl">Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading info...</p>}>
        <BlogInfo />
      </Suspense>
    </section>
  );
}
