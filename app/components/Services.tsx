export default function Services() {
  return (
    <section className="px-6 py-16">
      <h3 className="text-2xl font-bold text-center mb-10">
        What We Offer
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border p-6 rounded shadow text-center"
          >
            <h4 className="font-semibold mb-2">Islamic Course</h4>
            <p className="text-sm mb-4">
              Learn Quran, Tajweed & Islamic Knowledge.
            </p>
            <button className="text-green-600 font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
