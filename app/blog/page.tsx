import Link from "next/link";
import { posts } from "../../data/posts";
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] px-6 py-16 text-[#2b2b2b]">

      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-light">Blog Perjalanan</h1>
        <p className="text-gray-600 mt-2">
          Semua cerita perjalanan dalam satu tempat.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-8">

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-medium">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </Link>
        ))}

      </div>

    </main>
  );
}