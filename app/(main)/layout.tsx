import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-4 md:p-10 md:p-20 font-poppins text-sm tracking-wide container mx-auto">
      {children}
    </main>
  );
}
