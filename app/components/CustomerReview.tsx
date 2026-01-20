"use client";

import Image from "next/image";

export default function CustomerReview() {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FBF3DE] via-[#EEF8EE] to-[#E4F5ED]" />

      {/* Decorative Patterns */}
     
      <div className="absolute right-20 top-16 opacity-20 text-[120px] text-green-300">أمين</div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative">
          <Image
            src="/images/resource/testimonial.jpg"
            alt="Quran Reading"
            width={520}
            height={520}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Rating */}
          <div className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-xl shadow mb-6">
            <span className="border border-yellow-600">★ ★ ★ ★ ★</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Customers Review
          </h3>

          {/* Review Text */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            Honestly i don’t have enough good words to write about
            resala academy everyone in resala academy are very nice
            very calm they are also flexible about your schedules.
            i just want say
          </p>


          {/* Author */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/resource/author-1.png"
              alt="Hafiz bin Usif"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold text-gray-900">
                Hafiz bin Usif
              </h4>
              <p className="text-sm text-gray-500">
                Quran Teacher
              </p>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-2 mi-60 mt-10">
            <span className="w-3 h-3 rounded-full border border-green-600"></span>
            <span className="w-3 h-3 rounded-full border border-green-600"></span>
            <span className="w-3 h-3 rounded-full bg-green-600"></span>
          </div>
        </div>
      </div>

      

    </section>
  );
}
