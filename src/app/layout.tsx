import type { Metadata } from "next";

import { Childful } from "@/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "#define GAMES",
  description: "We define what games are",
};

export default function RootLayout({ children }: Childful): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
