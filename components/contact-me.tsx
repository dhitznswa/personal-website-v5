"use client";

import { Button } from "./ui/button";

export default function ContactMe() {
  const handlerClick = (type: string) => {
    if (type === "email") {
      window.open("mailto:dhitzcode@gmail.com");
    } else if (type === "instagram") {
      window.open("https://instagram.com/dhitzcode");
    } else if (type === "wa") {
      window.open("https://wa.me/6282316914638/?text=Hallo");
    }
  };

  return (
    <>
      <div className="space-y-8">
        <h3 className="text-xl lg:text-3xl font-light text-foreground/70 max-w-2xl w-full">
          Contact me in one of the ways below to discuss my work, explore
          projects, or book my services
        </h3>
        <div className="flex items-center flex-wrap gap-3">
          <Button
            size="sm"
            onClick={() => handlerClick("email")}
            className="font-light"
          >
            Email
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-br from-purple-600 to-pink-600 text-white font-light"
            onClick={() => handlerClick("instagram")}
          >
            Instagram
          </Button>
          <Button
            size="sm"
            className="bg-green-600 text-white font-light"
            onClick={() => handlerClick("wa")}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
