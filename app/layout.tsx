import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jejak Langkah",
  description: "Travel Journal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">

      <body className="bg-[#f6f1ea] text-[#2b2b2b] pt-24">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f1ea]/80 backdrop-blur border-b border-black/10">

          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

            <Link
              href="/"
              className="text-sm uppercase tracking-[0.3em]"
            >
              Jejak Langkah
            </Link>

            <nav className="flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-700">

              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

            </nav>

          </div>

        </header>

        {children}

      </body>

    </html>
  );
}