export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#2b2b2b] flex items-center justify-center px-6">

      <section className="max-w-3xl text-center">

        <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
          Contact
        </p>

        <h1
          className="text-6xl md:text-8xl font-extralight mb-10"
          style={{ fontFamily: "serif" }}
        >
          Let’s Connect
        </h1>

        <p className="text-gray-500 leading-loose text-lg mb-16">
          Jika kamu ingin berbagi cerita perjalanan,
          bekerja sama, atau sekadar menyapa,
          kamu bisa menemukanku di sini.
        </p>

        <div className="space-y-8 text-xl">

          {/* EMAIL */}
          <div className="border-b border-gray-300 pb-6">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3">
              Email
            </p>

            <a
              href="mailto:rahayu.sanjoyo@gmail.com"
              className="hover:text-gray-500 transition"
            >
              rahayu.sanjoyo@gmail.com
            </a>

          </div>

          {/* INSTAGRAM */}
          <div className="border-b border-gray-300 pb-6">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3">
              Instagram
            </p>

            <a
              href="https://instagram.com/rahayu.sanjoyo"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              @rahayu.sanjoyo
            </a>

          </div>

          {/* TIKTOK */}
          <div className="border-b border-gray-300 pb-6">

            <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3">
              TikTok
            </p>

            <a
              href="https://tiktok.com/@rahayusanjoyo"
              target="_blank"
              className="hover:text-gray-500 transition"
            >
              @rahayusanjoyo
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}