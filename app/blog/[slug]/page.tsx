import { getPosts } from "@/lib/posts";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) redirect("/blog");

  return <div>My Post: {slug}</div>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}
