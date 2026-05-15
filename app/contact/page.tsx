export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] overflow-hidden relative px-6 py-20">

      {/* BACKGROUND LINES */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c8b9a6_1px,transparent_1px)] [background-size:30px_30px]" />

      {/* PAPER PLANE */}
      <div className="absolute top-20 right-16 text-[#9b6b2e] text-5xl rotate-12">
        ✈
      </div>

      {/* HIKER IMAGE */}
      <img
        src="/images/hiker.png"
        alt="Hiker"
        className="absolute bottom-0 left-0 w-60 opacity-90"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <div className="mb-14">
          <p className="text-[#9b6b2e] text-5xl mb-2">❦</p>

          <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#1e1e1e] leading-none">
            Let’s <span className="text-[#9b6b2e]">Connect</span>
          </h1>

          <div className="w-52 h-[3px] bg-[#9b6b2e] mx-auto rounded-full mt-4 mb-8" />

          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Jika kamu ingin berbagi cerita perjalanan, bekerja sama,
            atau sekadar menyapa, kamu bisa menemukanku di sini.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300">

            <div className="w-20 h-20 rounded-full bg-[#f8efe3] flex items-center justify-center text-4xl">
              ✉
            </div>

            <div className="text-left flex-1">
              <p className="text-xs tracking-[4px] text-[#9b6b2e] mb-2">
                EMAIL
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                rahayu.sanjoyo@gmail.com
              </h2>

              <p className="text-gray-500 mt-1">
                Untuk kerja sama & kolaborasi
              </p>
            </div>

            <span className="text-3xl text-gray-400">→</span>
          </div>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/rahayu.sanjoyo"
            target="_blank"
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-[#f8efe3] flex items-center justify-center text-4xl">
              📸
            </div>

            <div className="text-left flex-1">
              <p className="text-xs tracking-[4px] text-[#9b6b2e] mb-2">
                INSTAGRAM
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                @rahayu.sanjoyo
              </h2>

              <p className="text-gray-500 mt-1">
                Cerita & momen perjalanan
              </p>
            </div>

            <span className="text-3xl text-gray-400">→</span>
          </a>

          {/* TIKTOK */}
          <a
            href="https://tiktok.com/@rahasanjoyo"
            target="_blank"
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-[#f8efe3] flex items-center justify-center text-4xl">
              🎵
            </div>

            <div className="text-left flex-1">
              <p className="text-xs tracking-[4px] text-[#9b6b2e] mb-2">
                TIKTOK
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                @rahasanjoyo
              </h2>

              <p className="text-gray-500 mt-1">
                Video perjalanan singkat
              </p>
            </div>

            <span className="text-3xl text-gray-400">→</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6285121353180"
            target="_blank"
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300"
          >

            <div className="w-20 h-20 rounded-full bg-[#f8efe3] flex items-center justify-center text-4xl">
              💬
            </div>

            <div className="text-left flex-1">
              <p className="text-xs tracking-[4px] text-green-700 mb-2">
                WHATSAPP
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                Chat via WhatsApp
              </h2>

              <p className="text-gray-500 mt-1">
                Klik untuk langsung menghubungi
              </p>
            </div>

            <span className="text-3xl text-gray-400">→</span>
          </a>
        </div>

        {/* BUTTON */}
        <div className="mt-12">

          <a
            href="https://wa.me/6285121353180"
            target="_blank"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#2c8b67] to-[#3aa77b] hover:scale-105 transition-all duration-300 text-white px-10 py-5 rounded-full shadow-2xl text-2xl font-medium"
          >
            <span className="text-4xl">💬</span>

            Hubungi Saya di WhatsApp

            <span className="text-3xl">→</span>
          </a>

          <p className="text-gray-500 mt-5 text-sm">
            🔒 Siap membalas pesan secepat mungkin
          </p>
        </div>
      </div>
    </main>
  );
}