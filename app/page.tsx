export default function HomePage() {
  return (
    <main className="bg-[#f6f1ea] text-[#1f1f1f] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/bromo.jpg"
          alt="Gunung Bromo"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div className="max-w-5xl">

            <p className="uppercase tracking-[6px] text-[#e7c28a] text-sm mb-6">
              Mountain • Ocean • Solitude
            </p>

            <h1 className="text-6xl md:text-8xl font-serif text-white leading-none mb-8">
              Jejak <span className="text-[#d8a15d]">Langkah</span>
            </h1>

            <p className="text-xl md:text-3xl text-[#f5f5f5] italic leading-relaxed max-w-3xl mx-auto">
              Traveling is not just about places,
              but about finding peace within myself.
            </p>

            {/* BUTTON */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

              <a
                href="/blog"
                className="bg-[#c28d52] hover:bg-[#a9753d] transition-all duration-300 text-white px-10 py-5 rounded-full text-lg shadow-2xl"
              >
                Read Stories
              </a>

              <a
                href="/about"
                className="border border-white/40 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-white px-10 py-5 rounded-full text-lg"
              >
                About Me
              </a>
            </div>
          </div>
        </div>

        {/* SCROLL TEXT */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-sm tracking-[4px] animate-bounce">
          SCROLL DOWN
        </div>
      </section>


      {/* ABOUT PREVIEW */}
      <section className="py-28 px-6 md:px-12 bg-[#f6f1ea]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <img
              src="/images/profile.jpg"
              alt="Sanjoyo"
              className="rounded-[40px] shadow-2xl w-full h-[650px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-6 max-w-xs">
              <p className="text-sm tracking-[3px] text-gray-500 uppercase mb-2">
                Mountain & Ocean Soul
              </p>

              <p className="text-lg leading-relaxed text-gray-700 italic">
                “The mountains taught me silence,
                and the ocean taught me surrender.”
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[4px] text-[#b88348] text-sm mb-5">
              About The Journey
            </p>

            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-[#1f1f1f]">
              Stories Written
              <br />
              Between Mountains
              <br />
              & Oceans
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">

              <p>
                Hi, I’m <span className="font-semibold text-[#9b6b2e]">Sanjoyo</span> —
                a traveler, mountain seeker, and certified AIDA freediver.
              </p>

              <p>
                Through Jejak Langkah, I share stories about mountains,
                oceans, roads, solitude, and all the small moments in between.
              </p>

              <p>
                Every journey leaves something behind —
                not only footprints on the road,
                but also memories within ourselves.
              </p>
            </div>

            <a
              href="/about"
              className="inline-block mt-10 bg-[#1f1f1f] hover:bg-black transition-all duration-300 text-white px-8 py-4 rounded-full shadow-lg"
            >
              Discover My Story
            </a>
          </div>
        </div>
      </section>


      {/* FEATURED STORIES */}
      <section className="py-28 px-6 md:px-12 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-[#b88348] text-sm mb-4">
              Featured Journeys
            </p>

            <h2 className="text-5xl md:text-6xl font-serif text-[#1f1f1f]">
              Latest Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
{/* CARD WIBAWA MUKTI */}
<a
  href="/blog/wibawa-mukti"
  className="group overflow-hidden rounded-[32px] shadow-2xl bg-[#f8f5f0] hover:-translate-y-2 transition-all duration-500"
>

  {/* IMAGE */}
  <div className="relative overflow-hidden">

    <img
      src="/images/wibawa/hero.jpeg"
      alt="Freediving Wibawa Mukti"
      className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    {/* CATEGORY */}
    <div className="absolute top-6 left-6">
      <p className="bg-[#0f1720]/70 backdrop-blur-md text-[#d7b07a] text-xs tracking-[4px] uppercase px-4 py-2 rounded-full border border-white/10">
        Freediving Story
      </p>
    </div>

    {/* TITLE INSIDE IMAGE */}
    <div className="absolute bottom-0 left-0 p-8">

      <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-4">
        Freediving di
        <br />
        Wibawa Mukti
      </h3>

      <p className="text-white/80 leading-relaxed max-w-sm">
        Ketika air menjadi tempat pulang,
        dan kesunyian perlahan menyembuhkan isi kepala.
      </p>
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-8">

    <div className="flex items-center gap-3 mb-5">
      <div className="w-12 h-[2px] bg-[#c28d52]" />

      <p className="uppercase tracking-[4px] text-xs text-[#b88348]">
        Healing Journey
      </p>
    </div>

    <p className="text-gray-600 leading-relaxed text-lg">
      Sebuah cerita tentang napas,
      kesunyian,
      dan perjalanan kecil untuk kembali tenang
      di tengah hidup yang terlalu berisik.
    </p>

    <div className="mt-8 flex items-center justify-between">

      <span className="text-sm tracking-[3px] uppercase text-gray-400">
        Read Story
      </span>

      <div className="w-12 h-12 rounded-full border border-[#d8a15d] flex items-center justify-center text-[#d8a15d] group-hover:bg-[#d8a15d] group-hover:text-white transition-all duration-500">
        →
      </div>
    </div>
  </div>
</a>
            {/* CARD 1 */}
            <a
              href="/blog/prau"
              className="group overflow-hidden rounded-[30px] shadow-xl bg-[#f8f5f0]"
            >
              <div className="overflow-hidden">
                <img
                  src="/images/prau/5.jpeg"
                  alt="Gunung Prau"
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[3px] text-[#b88348] mb-3">
                  Hiking Journey
                </p>

                <h3 className="text-3xl font-serif mb-4 leading-tight">
                  Sunrise Above
                  The Sea of Clouds
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  A quiet morning at Mount Prau where the clouds felt endless.
                </p>
              </div>
            </a>


            {/* CARD 2 */}
            <div className="group overflow-hidden rounded-[30px] shadow-xl bg-[#f8f5f0]">

              <div className="overflow-hidden">
                <img
                  src="/images/freedive.jpg"
                  alt="Freedive"
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[3px] text-[#4d87a8] mb-3">
                  Freediving
                </p>

                <h3 className="text-3xl font-serif mb-4 leading-tight">
                  Exploring MENJANGAN CAVE
                  in one breath
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  COMING SOON
                </p>
              </div>
            </div>


            {/* CARD 3 */}
            <div className="group overflow-hidden rounded-[30px] shadow-xl bg-[#f8f5f0]">

              <div className="overflow-hidden">
                <img
                  src="/images/bromo.jpg"
                  alt="Bromo"
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[3px] text-[#b88348] mb-3">
                  Travel Journal
                </p>

                <h3 className="text-3xl font-serif mb-4 leading-tight">
                  Chasing Golden
                  Sunrise in Bromo
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  COMING SOON
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* QUOTE SECTION */}
      <section className="relative py-36 px-6 overflow-hidden">

        <img
          src="/images/bromo.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

          <p className="text-4xl md:text-6xl font-serif leading-relaxed italic">
            “Not every journey is meant
            to find a destination.
            Some are simply meant
            to find ourselves.”
          </p>

          <div className="w-24 h-[2px] bg-[#d8a15d] mx-auto my-10" />

          <p className="uppercase tracking-[5px] text-[#f3d4a8] text-sm">
            Jejak Langkah • Since 2026
          </p>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#111111] text-white py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-serif mb-4">
              Jejak <span className="text-[#d8a15d]">Langkah</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              A personal travel journal about mountains,
              oceans, silence, and the journey within.
            </p>
          </div>

          <div className="text-center">
            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-5">
              Explore
            </p>

            <div className="space-y-3 text-lg">
              <p><a href="/">Home</a></p>
              <p><a href="/about">About</a></p>
              <p><a href="/blog">Stories</a></p>
              <p><a href="/contact">Contact</a></p>
            </div>
          </div>

          
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500 text-sm">
          © 2026 Jejak Langkah — All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}