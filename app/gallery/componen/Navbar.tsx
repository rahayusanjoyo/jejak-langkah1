import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f6f1ea]/80 backdrop-blur border-b border-black/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="text-xl font-light tracking-wide">
          Jejak Langkah
        </Link>

        {/* MENU */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link href="/articles" className="hover:opacity-70 transition">
            Articles
          </Link>

          <Link href="/gallery" className="hover:opacity-70 transition">
            Gallery
          </Link>

          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>

          <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}