"use client"; // Error boundaries must be Client Components

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-background flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Oops! Something went wrong.</h2>
        <div className="flex gap-3 justify-center items-center">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
