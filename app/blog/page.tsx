export default function BlogPage() {
  return (
    <main className="bg-[#f6f1ea] min-h-screen px-6 py-24">

      {/* HEADER */}
      <section className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-[#b88348] text-sm mb-4">
          Travel Journal
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-[#1f1f1f]">
          Stories & Journeys
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
          Stories about mountains, oceans, solitude,
          and the quiet moments in between.
        </p>
      </section>


      {/* ARTICLE GRID */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ARTICLE 1 */}
        <a
          href="/blog/prau"
          className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500"
        >

          <div className="overflow-hidden">
            <img
              src="/images/prau/5.jpeg"
              alt="Gunung Prau"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
            />
          </div>

          <div className="p-8">

            <p className="uppercase tracking-[4px] text-[#b88348] text-sm mb-3">
              Hiking Journey
            </p>

            <h2 className="text-4xl font-serif mb-5 leading-tight">
              Chasing Sea of Clouds
              in Mount Prau
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A quiet morning above the clouds,
              where silence feels warmer than sunrise.
            </p>
          </div>
        </a>


        {/* ARTICLE 2 */}
        <a
          href="/blog/wibawa-mukti"
          className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500"
        >

          <div className="overflow-hidden">
            <img
              src="/images/wibawa/hero.jpeg"
              alt="Freediving Wibawa Mukti"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition-all duration-700"
            />
          </div>

          <div className="p-8">

            <p className="uppercase tracking-[4px] text-[#4f88a8] text-sm mb-3">
              Freediving Journal
            </p>

            <h2 className="text-4xl font-serif mb-5 leading-tight">
              Freediving 
              Wibawa Mukti
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Where silence feels deeper, breaths become slower, 
              and healing happens quietly beneath the sea.
            </p>
          </div>
        </a>

      </section>
    </main>
  );
}