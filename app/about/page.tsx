export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#1f1f1f] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[110vh] w-full">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/bromo/bromo.jpeg"
          alt="Gunung Bromo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <p className="uppercase tracking-[5px] text-sm text-[#e7c28a] mb-4">
                About Me
              </p>

              <h1 className="text-5xl md:text-8xl font-serif leading-none mb-6">
                Jejak <span className="text-[#d8a15d]">Langkah</span>
              </h1>

              <p className="italic text-2xl md:text-3xl text-[#f6dfbc] mb-10">
                “Traveling is not just about places,
                but about finding peace within myself.”
              </p>

              {/* GLASS CARD */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">

                <div className="space-y-6 text-lg leading-relaxed text-[#f5f5f5]">

                  <p>
                    Hi, I’m <span className="text-[#ffd39a] font-semibold">Sanjoyo</span> — 
                    a traveler, mountain seeker, and someone who finds peace in silence.
                  </p>

                  <p>
                    At 39 years old, I have learned that the best journeys are 
                    not always about how far we go, but how deeply we feel.
                    Mountains became my place to breathe, to slow down,
                    and to reconnect with life.
                  </p>

                  <p>
                    Beyond hiking and traveling, I am also a certified
                    <span className="text-[#8dd6ff] font-semibold"> AIDA freediver</span>.
                    Beneath the surface of the ocean, I discovered another
                    kind of calm — a quiet world where everything slows down,
                    leaving only breath, heartbeat, and stillness.
                  </p>

                  <p>
                    Traveling, hiking, and freediving are not merely hobbies for me.
                    They are ways of understanding life, escaping noise,
                    and appreciating moments that often go unnoticed.
                  </p>

                  <p>
                    Today, besides exploring the world, I am also a
                    final-semester undergraduate student majoring in
                    <span className="text-[#ffd39a] font-semibold"> Management</span>
                    at a public university.
                    This journey reminds me that learning never truly ends.
                  </p>

                  <p>
                    Through <span className="text-[#ffd39a] font-semibold">Jejak Langkah</span>,
                    I share stories about mountains, oceans, roads,
                    solitude, and all the small moments in between.
                  </p>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex justify-center">

              <div className="relative">

                {/* PROFILE IMAGE */}
                <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl">

                  <img
                    src="/images/bromo/profile.jpeg"
                    alt="Sanjoyo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute -bottom-6 -left-10 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">

                  <p className="text-sm tracking-[3px] text-gray-500 uppercase">
                    Explore • Breathe • Live
                  </p>

                  <p className="text-xl font-semibold text-[#9b6b2e] mt-1">
                    Mountain & Ocean Soul
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 px-6 bg-[#f7f2eb]">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-4xl md:text-5xl font-serif text-[#9b6b2e] leading-relaxed">
            “The mountains taught me silence,
            and the ocean taught me surrender.”
          </p>

          <div className="w-24 h-[2px] bg-[#c8a97e] mx-auto my-8" />

          <p className="text-gray-600 text-lg">
            Every journey leaves a footprint — not only on the road,
            but also within ourselves.
          </p>

        </div>
      </section>
    </main>
  );
}