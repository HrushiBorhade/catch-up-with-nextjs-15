import { getBlogInfo } from "@/lib/posts";

export default async function BlogInfo() {
  const blogInfo = await getBlogInfo();
  return (
    <main>
      <p>Author: {blogInfo.author}</p>
    </main>
  );
}
