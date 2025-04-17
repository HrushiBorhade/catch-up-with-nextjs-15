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
