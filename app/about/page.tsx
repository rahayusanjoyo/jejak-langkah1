export default function About() {
  return (
    <main className="bg-[#f6f1ea] text-[#2b2b2b] overflow-hidden">

      {/* HERO IMAGE */}
      <section className="relative h-[90vh]">

        <img
          src="https://images.unsplash.com/photo-1578469645742-46cae010e5d4?q=80&w=1800"
          alt="Bromo"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-20 left-10 md:left-20 text-white">

          <p className="uppercase tracking-[0.5em] text-sm mb-6">
            About Me
          </p>

          <h1
            className="text-5xl md:text-8xl font-extralight leading-none"
            style={{ fontFamily: "serif" }}
          >
            Jejak Langkah
          </h1>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-28">

        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-8">
            My Story
          </p>

          <h2
            className="text-4xl md:text-6xl font-extralight leading-tight mb-16"
            style={{ fontFamily: "serif" }}
          >
            Traveling is not just about places,
            but about finding peace within myself.
          </h2>

          <div className="space-y-10 text-lg text-gray-600 leading-loose">

            <p>
              Hi, I’m Sanjoyo — a traveler, mountain seeker,
              and someone who finds peace in silence.
            </p>

            <p>
              At 39 years old, I have learned that
              the best journeys are not always about
              how far we go, but how deeply we feel.
              Mountains became my place to breathe,
              to slow down, and to reconnect with life.
            </p>

            <p>
              Beyond hiking and traveling,
              I am also a certified AIDA freediver.
              Beneath the surface of the ocean,
              I discovered another kind of calm —
              a quiet world where everything slows down,
              leaving only breath, heartbeat, and stillness.
            </p>

            <p>
              Traveling, hiking, and freediving
              are not merely hobbies for me.
              They are ways of understanding life,
              escaping noise, and appreciating
              moments that often go unnoticed.
            </p>

            <p>
              Today, besides exploring the world,
              I am also a final-semester undergraduate
              student majoring in Management
              at a public university.
              This journey reminds me that learning
              never truly ends.
            </p>

            <p>
              Through Jejak Langkah,
              I share stories about mountains,
              oceans, roads, solitude,
              and all the small moments in between.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}