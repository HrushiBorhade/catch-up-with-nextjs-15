import Link from "next/link";

const Post = ({
  post,
}: {
  post: {
    id: number;
    title: string;
  };
}) => {
  return (
    <li>
      <Link href={`/blog/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default Post;
