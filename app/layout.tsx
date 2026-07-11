import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ishan Bhat | Full-Stack Developer",
  description:
    "Full-stack developer and embedded Linux engineer working with Next.js, React, TypeScript, Node.js and PostgreSQL, plus native C++ software for ARM handhelds.",
  keywords: [
    "Ishan Bhat",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "embedded Linux",
  ],
  openGraph: {
    title: "Ishan Bhat | Full-Stack Developer",
    description:
      "Full-stack developer and embedded Linux engineer based in Pune.",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 512,
        height: 512,
        alt: "Ishan Bhat — Full-Stack Developer",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/images/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
