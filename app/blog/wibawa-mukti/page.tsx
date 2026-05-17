export default function WibawaMuktiArticle() {
  return (
    <main className="bg-[#f4efe8] text-[#1d1d1d] overflow-hidden">

      {/* HERO */}
      <section className="relative h-[95vh] overflow-hidden">

        <img
          src="/images/wibawa/hero.jpeg"
          alt="Freediving Wibawa Mukti"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div className="max-w-5xl">

            <p className="uppercase tracking-[8px] text-[#ddb57a] text-xs md:text-sm mb-8">
              FREEDIVING • HEALING • SILENCE
            </p>

            <h1 className="text-6xl md:text-[110px] leading-[0.9] font-serif text-white mb-10">
              Wibawa
              <br />
              <span className="text-[#d8a15d] italic">
                Mukti
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-2xl text-[#e8e8e8] italic leading-relaxed font-light">
              “Ketika air menjadi tempat pulang,
              dan kesunyian perlahan
              menyembuhkan isi kepala.”
            </p>

          </div>
        </div>

        {/* FADE */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f4efe8] to-transparent" />
      </section>


      {/* ARTICLE */}
      <section className="relative py-28 px-6">

        <div className="max-w-3xl mx-auto">

          {/* OPENING */}
          <div className="mb-32 text-center">

            <p className="uppercase tracking-[6px] text-[#a77b43] text-xs mb-10">
              oleh Jejak Langkah
            </p>

            <p className="uppercase tracking-[6px] text-[#a77b43] text-xs mb-10">
              MEI - 2026
            </p>

            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-14 text-[#1f1f1f]">
              Tidak Semua
              <br />
              Perjalanan
              <br />
              Tentang Liburan
            </h2>

            <div className="space-y-10 text-[22px] leading-[2.3] text-[#555555] font-light">

              <p>
                Ada yang pergi karena lelah.
                Ada yang pergi karena ingin bernapas lebih pelan.
                Dan ada juga yang diam-diam sedang mencoba menyelamatkan dirinya sendiri dari isi kepala yang terlalu ramai.
              </p>

              <p>
                Belakangan ini hidup terasa seperti lomba yang tidak pernah selesai.
                Bangun pagi, bekerja, membalas chat,
                menghadapi ekspektasi,
                lalu tidur dengan kepala yang tetap berisik.
              </p>

            </div>
          </div>


          {/* CINEMATIC IMAGE */}
          <div className="mb-32">

            <div className="max-w-xl mx-auto">
              <img
                src="/images/wibawa/tol-cibatu.jpeg"
                alt="Tol Cibatu"
                className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] w-full"
              />
            </div>

            <p className="text-center mt-6 text-sm tracking-[3px] uppercase text-gray-500">
              Gerbang Tol Cibatu
            </p>

          </div>


          {/* STORY */}
          <div className="mb-32">

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-14">
              Perjalanan Pagi
              <br />
              dan Pikiran yang
              <br />
              Ikut Melambat
            </h2>

            <div className="space-y-10 text-[22px] leading-[2.3] text-[#555555] font-light">

              <p>
                Jam masih menunjukkan pukul tujuh pagi ketika kendaraan mulai melaju menuju Cikarang.
                Langit mendung menggantung rendah.
                Jalanan belum ramai.
              </p>

              <p>
                Tapi pagi itu terasa berbeda.
                Aku tidak sedang mengejar apa pun.
                Tidak terburu-buru sampai.
                Tidak terburu-buru pulang.
              </p>

              <p>
                Aku hanya ingin pergi sebentar dari kebisingan.
              </p>

            </div>
          </div>


          {/* IMAGE SMALL */}
          <div className="mb-32">

            <div className="max-w-lg mx-auto">
              <img
                src="/images/wibawa/kolam-sepi.jpeg"
                alt="Kolam Wibawa Mukti"
                className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] w-full"
              />
            </div>

            <p className="text-center mt-6 text-sm tracking-[3px] uppercase text-gray-500">
              Kolam Sunyi Wibawa Mukti
            </p>

          </div>


          {/* STORY */}
          <div className="mb-32">

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-14">
              Air Biru,
              <br />
              Tribun Kosong,
              <br />
              dan Dunia yang Sunyi
            </h2>

            <div className="space-y-10 text-[22px] leading-[2.3] text-[#555555] font-light">

              <p>
                Sesampainya di stadion aquatic,
                suasananya masih sangat sepi.
                Tidak ada peluit.
                Tidak ada keramaian.
              </p>

              <p>
                Hanya suara angin kecil,
                pantulan cahaya di permukaan air,
                dan dunia yang terasa jauh lebih lambat.
              </p>

              <p>
                Untuk pertama kalinya setelah sekian lama,
                aku merasa benar-benar diam.
              </p>

            </div>
          </div>


          {/* 2 GRID IMAGES */}
          <div className="grid md:grid-cols-2 gap-10 mb-32 max-w-4xl mx-auto">

            <div>
              <img
                src="/images/wibawa/peralatan.jpeg"
                alt="Freedive Gear"
                className="rounded-[28px] shadow-2xl w-full h-[260px] object-cover"
              />

              <p className="text-center mt-5 text-xs tracking-[3px] uppercase text-gray-500">
                Freedive Gear
              </p>
            </div>

            <div>
              <img
                src="/images/wibawa/tribun.jpeg"
                alt="Tribun"
                className="rounded-[28px] shadow-2xl w-full h-[260px] object-cover"
              />

              <p className="text-center mt-5 text-xs tracking-[3px] uppercase text-gray-500">
                Empty Stadium
              </p>
            </div>

          </div>


          {/* BIG QUOTE */}
          <div className="py-24 text-center">

            <p className="font-serif italic text-4xl md:text-6xl leading-[1.5] text-[#7a5528]">
              “Kadang manusia
              cuma butuh tempat
              untuk diam.”
            </p>

          </div>


          {/* FEATURE IMAGE */}
          <div className="mb-32">

            <div className="max-w-md mx-auto">
              <img
                src="/images/wibawa/merenung.jpeg"
                alt="Merenung"
                className="rounded-[34px] shadow-[0_30px_80px_rgba(0,0,0,0.2)] w-full"
              />
            </div>

            <p className="text-center mt-6 text-sm tracking-[3px] uppercase text-gray-500">
              Merenung di Pinggir Kolam
            </p>

          </div>


          {/* STORY */}
          <div className="mb-32">

            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-14">
              Berdamai
              <br />
              dengan Isi Kepala
            </h2>

            <div className="space-y-10 text-[22px] leading-[2.3] text-[#555555] font-light">

              <p>
                Aku duduk di pinggir kolam memakai wetsuit hitam.
                Tidak membuka ponsel.
                Tidak berbicara dengan siapa-siapa.
              </p>

              <p>
                Aku cuma diam.
              </p>

              <p>
                Dan mungkin itu pertama kalinya setelah sekian lama,
                aku benar-benar berhenti.
              </p>

            </div>
          </div>


          {/* STATIC */}
          <div className="mb-32">

            <div className="max-w-lg mx-auto">
              <img
                src="/images/wibawa/static.jpeg"
                alt="Static"
                className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] w-full"
              />
            </div>

            <p className="text-center mt-6 text-sm tracking-[3px] uppercase text-gray-500">
              Static Apnea — PB 2:49
            </p>

          </div>


          {/* DIVE IMAGES */}
          <div className="grid md:grid-cols-2 gap-10 mb-32 max-w-4xl mx-auto">

            <div>
              <img
                src="/images/wibawa/tali.jpeg"
                alt="Tali"
                className="rounded-[28px] shadow-2xl w-full h-[320px] object-cover"
              />

              <p className="text-center mt-5 text-xs tracking-[3px] uppercase text-gray-500">
                Silence Underwater
              </p>
            </div>

            <div>
              <img
                src="/images/wibawa/duckdive.jpeg"
                alt="Duck Dive"
                className="rounded-[28px] shadow-2xl w-full h-[320px] object-cover"
              />

              <p className="text-center mt-5 text-xs tracking-[3px] uppercase text-gray-500">
                One Breath One Dive
              </p>
            </div>

          </div>


          {/* ENDING */}
          <div className="text-center py-24">

            <div className="space-y-10 text-[22px] leading-[2.3] text-[#555555] font-light max-w-2xl mx-auto">

              <p>
                Hari itu aku datang ke Wibawa Mukti bukan untuk menjadi atlet.
              </p>

              <p>
                Aku datang karena lelah.
                Dan pulang dengan hati yang sedikit lebih tenang.
              </p>

            </div>

            <div className="w-24 h-[2px] bg-[#d8a15d] mx-auto my-14" />

            <blockquote className="font-serif italic text-4xl md:text-6xl leading-[1.5] text-[#7a5528]">
              “Tidak semua tempat
              yang menyembuhkan
              harus berada jauh
              dari rumah.”
            </blockquote>

            <p className="uppercase tracking-[6px] text-[#9b7a4b] text-xs mt-14">
              JEJAK LANGKAH • 2026
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}