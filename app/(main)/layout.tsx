import NavbarMenu from "@/components/navbar-menu";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full relative">
      <NavbarMenu />
      <main className="p-4 md:p-10 xl:p-20 font-poppins text-sm tracking-wide container mx-auto">
        {children}
      </main>
    </div>
  );
}
