"use client";

import { MoonIcon, SunMoonIcon } from "lucide-react";
import { HoverTitle } from "./navbar-menu";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <HoverTitle title="Toggle Dark/Light Mode">
      <div
        className="cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunMoonIcon className="transition-all duration-300" />
        ) : (
          <MoonIcon className="transition-all duration-300" />
        )}
      </div>
    </HoverTitle>
  );
}
