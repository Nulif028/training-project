"use client";

import React from "react";

const services = [
  {
    title: "Online Quran Classes",
    desc:
      "There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet",
    icon: "📖",
  },
  {
    title: "Tafseer Course",
    desc:
      "There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet",
    icon: "🤲",
  },
  {
    title: "We Value Our Students",
    desc:
      "There are many variations of passages of lorem ipsum available lorem ipsum dolor sit amet",
    icon: "📚",
  },
];

export default function Services() {
  return (
    <section 
  style={{
    backgroundImage: "url('/images/background/testimonial-one_bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="relative bg-blackpy-24"

>


      {/* Decorative Patterns */}
      <div className=" absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-center bg-no-repeat"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-green-500 text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-snug">
            We Offer An Effective <br />
            Arabic & Quran Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg px-8 py-10 relative hover:-translate-y-2 transition"
            >
              {/* Icon */}
              <div className="absolute -top-8 right-8 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-green-600"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

      </div>

      

    </section>
  );
}
