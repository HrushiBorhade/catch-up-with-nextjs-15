"use client";

import { Signup } from "@/ui/Signup";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <button
        className="hover:underline underline-offset-4 "
        onClick={() => router.push("/")}
      >
        {" "}
        Home{" "}
      </button>
      <Signup />
    </section>
  );
}
