import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-green-600 font-semibold uppercase tracking-wide mb-2">
              Student Gallery
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Our Islamic Institute <br /> Academy Gallery
            </h2>
          </div>

          <button className="mt-6 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
            Quick Start Now
          </button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/1.jpg"
              alt="Gallery Image 1"
              width={400}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/2.jpg"
              alt="Gallery Image 2"
              width={400}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/3.jpg"
              alt="Gallery Image 3"
              width={400}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery/4.jpg"
              alt="Gallery Image 4"
              width={400}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
