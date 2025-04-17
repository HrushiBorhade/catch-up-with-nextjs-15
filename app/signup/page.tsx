"use client";

import { Signup } from "@/ui/Signup";

export default function Page() {
  // Check for previous error on render
  const hasErrored = typeof window !== "undefined" && sessionStorage.getItem("hasErrored");
  
  // If no previous error, set the flag and throw
  if (!hasErrored) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasErrored", "true");
    }
    throw new Error("unexpected error in signup");
  }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Signup />
    </section>
  );
}