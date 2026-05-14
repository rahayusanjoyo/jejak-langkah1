export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#2b2b2b] px-6 py-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light">
          Galeri Perjalanan
        </h1>
        <p className="text-gray-600 mt-3">
          Potongan momen yang tidak sempat diceritakan dengan kata-kata.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "/images/prau/1.jpeg",
          "/images/prau/2.jpeg",
          "/images/prau/3.jpeg",
          "/images/prau/4.jpeg",
          "/images/prau/5.jpeg",
        ].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={`gallery-${i}`}
              className="w-full h-40 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </main>
  );
}