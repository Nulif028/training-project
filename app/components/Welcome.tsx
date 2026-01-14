"use client";

import Image from "next/image";

export default function Welcome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-green-600 text-sm font-semibold uppercase tracking-wide">
            Islamic Online Madrasah
          </span>
          <img 
            src="/images/icons/bismillah-5.png"
            alt=""
            width={120}
            height={120}
            />

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Welcome To Imman Quran <br /> Institute
          </h2>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            We welcome our users to Online Quran teaching services where we are
            offering multiple Islamic as well as character building and life
            reformation courses as per the teachings of Sharia.
          </p>

          {/* Feature Box */}
          <div className="mt-8 flex items-start gap-4">
            <Image
              src="/images/resource/welcome.jpg"
              alt="Student"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />

            <div>
              <p className="text-gray-600 text-sm">
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered business consulting
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  🕌
                </div>
                <span className="text-green-700 font-semibold">
                  Learn Online at Your Own Pace
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            We offer our students high-quality Arabic and Quran at affordable
            prices that meet their budget.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/images/resource/welcome-1.jpg"
            alt="Quran Reading"
            width={600}
            height={500}
            className="rounded-2xl object-cover"
          />

          {/* Bottom Ribbon */}
          <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-600 to-yellow-400 px-6 py-3 rounded-lg flex items-center gap-3 text-black font-semibold">
            🌍 Since 1995 Operating in the world
          </div>
        </div>

      </div>
    </section>
  );
}
