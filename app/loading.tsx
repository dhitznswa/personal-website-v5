import React from "react";

export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-background flex justify-center items-center">
      <div className="text-center space-y-2.5">
        <div className="h-10 w-10 border-4 border-x-hli border-y-foreground animate-spin rounded-full mx-auto"></div>
        <p className="text-muted-foreground font-medium">Loading Content...</p>
      </div>
    </div>
  );
}
