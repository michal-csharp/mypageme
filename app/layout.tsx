import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "michal-csharp | Developer Portfolio",
  description: "Full-stack developer portfolio – React, Next.js, TypeScript",
  keywords: "Developer, React, Next.js, TypeScript, Tailwind CSS, Portfolio",
  authors: [{ name: "michal-csharp" }],
  openGraph: {
    title: "michal-csharp | Developer Portfolio",
    description: "Full-stack developer portfolio – React, Next.js, TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className={`${inter.className} noise`}>{children}</body>
    </html>
  );
}
