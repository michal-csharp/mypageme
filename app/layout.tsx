import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer | Portfolio",
  description: "Moderní portfolio frontend vývojáře specialisty na React a Next.js",
  keywords: "Frontend Developer, React, Next.js, TypeScript, Tailwind CSS",
  authors: [{ name: "Frontend Developer" }],
  openGraph: {
    title: "Frontend Developer | Portfolio",
    description: "Moderní portfolio frontend vývojáře specialisty na React a Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
