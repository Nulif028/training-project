"use client";

import React from "react";

export default function PreFooter() {
  return (
    <section className="relative -mb-35 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className=" bg-gradient-to-r from-green-500 to-yellow-400 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">

          {/* Left Content */}
          <div className="flex items-center gap-6">
            {/* Icon Circle */}
            <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-black">
             
            </div>

            {/* Text */}
            <h2 className="text-white text-xl md:text-3xl font-bold leading-snug">
              Proud To Be Serving Thousands Of Muslim <br className="hidden md:block" />
              Families Around The World
            </h2>
          </div>

          {/* Button */}
          <button className="bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition">
            Get In Touch
          </button>

        </div>
      </div>
    </section>
  );
}

