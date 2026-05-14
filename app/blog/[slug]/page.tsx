import { posts } from "../../../data/posts";
import Link from "next/link";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Artikel tidak ditemukan</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] px-6 py-16 text-[#2b2b2b]">
      <div className="max-w-3xl mx-auto">

        <Link href="/blog" className="text-sm text-gray-500">
          ← Kembali
        </Link>

        <h1 className="text-4xl font-light mt-6">{post.title}</h1>

        <p className="text-gray-600 mt-2">{post.excerpt}</p>

        <img
          src={post.image}
          className="mt-8 w-full h-[500px] object-cover rounded-xl"
        />
      </div>
    </main>
  );
}