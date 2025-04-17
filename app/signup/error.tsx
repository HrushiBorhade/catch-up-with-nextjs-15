"use client";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // log error to monitoring/tracking service
    console.error("Error", error.message);
  }, [error]);
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <main className="container border rounded-lg flex flex-col gap-4">
        <h1>Something went wrong during Signup</h1>
        {error.message}
        <button onClick={reset}>Try Again</button>
      </main>
    </section>
  );
}
