import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "My Personal Website - IG: @dhitznswa",
    template: "%s | My Personal Website - IG: @dhitznswa",
  },
  description:
    "My personal website version 5, created with Next.js, Tailwind CSS, and Shadcn Ui.",
  openGraph: {
    title: "My Personal Website - IG: @dhitznswa",
    description:
      "My personal website version 5, created with Next.js, Tailwind CSS, and Shadcn Ui.",
    url: "https://dhitznswa.vercel.app",
    siteName: "My Personal Website - IG: @dhitznswa",
    images: [
      {
        url: "/images/og.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Personal Website - IG: @dhitznswa",
    description:
      "My personal website version 5, created with Next.js, Tailwind CSS, and Shadcn Ui.",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground/70`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <ReactLenis root>{children}</ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
