"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div
      className={cn("fixed top-40 z-999", openMenu ? "left-5" : " -left-12")}
    >
      <Card className=" p-4 shadow-lg relative">
        <div className="absolute top-[50%] transform -translate-y-[50%] -right-10 p-1 bg-hli rounded-md cursor-pointer " onClick={() => setOpenMenu(!openMenu)}>
            <Menu />
        </div>
        <CardContent className="p-0">
          <div className="flex flex-col gap-2">
            <div className="">X</div>
            <div className="">Y</div>
            <div className="">Z</div>
            <div className="">A</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
