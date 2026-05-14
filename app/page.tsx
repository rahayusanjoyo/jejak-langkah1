"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <main className="bg-[#f6f1ea] text-[#2b2b2b] overflow-hidden">

      {/* HERO */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >

        <div className="absolute w-[700px] h-[700px] bg-white/40 blur-3xl rounded-full top-[-250px]" />

        <p className="uppercase tracking-[0.5em] text-xs text-gray-500 mb-6 relative z-10">
          Travel Journal
        </p>

        <h1
          className="text-7xl md:text-[120px] leading-none tracking-tight font-light relative z-10"
          style={{ fontFamily: "serif" }}
        >
          Jejak Langkah
        </h1>

        <p className="mt-8 text-gray-500 max-w-xl leading-loose text-lg relative z-10">
          catatan perjalanan, gunung, laut, dan cerita kecil tentang kehidupan
        </p>

        <div className="absolute bottom-10 text-gray-400 text-sm animate-bounce">
          scroll
        </div>

      </motion.section>

      {/* HERO IMAGE */}
      <section className="max-w-7xl mx-auto px-6 -mt-20">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600"
          alt="travel"
          className="w-full h-[780px] object-cover rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
        />

      </section>

      {/* QUOTE */}
      <motion.section
        className="max-w-3xl mx-auto text-center py-32 px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <p
          className="text-3xl md:text-5xl leading-relaxed font-extralight text-[#3b3b3b]"
          style={{ fontFamily: "serif" }}
        >
          “Perjalanan selalu menemukan cara
          untuk mengubah manusia.”
        </p>

      </motion.section>

      {/* FEATURED PRAU */}
      <motion.section
        className="max-w-6xl mx-auto px-6 pb-32"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <Link href="/blog/prau" className="block group">

          <div className="overflow-hidden rounded-[40px]">

            <img
              src="/images/prau/6.jpeg"
              alt="Gunung Prau"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
            />

          </div>

          <div className="mt-10 text-center">

            <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-4">
              Featured Story
            </p>

            <h2 className="text-4xl md:text-5xl font-extralight leading-snug">
              Di Atas Prau, Aku Menyentuh Langit
            </h2>

            <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-loose">
              Jejak perjalanan di ketinggian 2565 mdpl, ketika lautan awan menjadi saksi sunyi antara aku dan alam.
            </p>

            <p className="mt-6 text-sm text-gray-700 font-medium">
              Baca cerita →
            </p>

          </div>

        </Link>

      </motion.section>

      {/* LATEST STORIES */}
      <motion.section
        className="max-w-6xl mx-auto px-6 pb-32"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-light">
            Latest Stories
          </h2>

          <Link href="/blog" className="text-sm text-gray-600 hover:text-black transition">
            Lihat semua →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* STORY 1 */}
          <Link href="/blog/prau" className="group">

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="/images/prau/5.jpeg"
                alt="Prau"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Gunung
              </p>

              <h3 className="text-2xl font-extralight mt-2">
                Di Atas Prau, Aku Menyentuh Langit
              </h3>
            </div>

          </Link>

          {/* STORY 2 */}
          <article className="group">

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200"
                alt="waterfall"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                COMING SOON
              </p>

              <h3 className="text-2xl font-extralight mt-2">
                More Stories On The Way
              </h3>
            </div>

          </article>

        </div>

      </motion.section>

    </main>
  );
}