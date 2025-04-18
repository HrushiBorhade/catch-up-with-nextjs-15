import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col gap-1 border rounded-lg p-3">
      <p>About page</p>

      <Link
        className="hover:underline cursor-pointer underline-offset-4"
        href="/about/personal"
      >
        Personal Info
      </Link>
    </div>
  );
}
