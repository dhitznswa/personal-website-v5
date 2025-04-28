import React from "react";
import { Card, CardContent } from "./ui/card";
import { Marquee } from "./magicui/marquee";
import { Github, Instagram, Mail, Twitter } from "lucide-react";

export default function NotifAlert() {
  return (
    <>
      <Card className="p-2 text-sm">
        <CardContent>
          <div className="text-center font-light">
            <Marquee pauseOnHover className="[--duration:20s]">
              <ul className="flex gap-4">
                <li className="flex gap-2 items-center">
                  <Github className="w-4 h-4" /> @dhitznswa
                </li>
                <li className="flex gap-2 items-center">
                  <Instagram className="w-4 h-4" /> @dhitznswa
                </li>
                <li className="flex gap-2 items-center">
                  <Twitter className="w-4 h-4" /> @dhitznswa
                </li>
                <li className="flex gap-2 items-center">
                  <Mail className="w-4 h-4" /> dhitz.nswa@gmail.com
                </li>
              </ul>
            </Marquee>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
