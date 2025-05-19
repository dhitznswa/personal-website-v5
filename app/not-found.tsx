import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-background flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-xl font-bold">Oops! Page not found.</h2>
        <p className="mb-5 mt-2">
          Maybe the URL you entered is wrong or the page was deleted.
        </p>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Homepage
        </Link>
      </div>
    </div>
  );
}
