import type { Metadata } from "next";

import { Childful } from "@/types";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "define.games",
  description: "A game development studio founded by Phil Filippak in 2025",
};

export default function RootLayout({ children }: Childful): JSX.Element {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
