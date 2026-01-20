"use client";

import React from "react";
import Link from "next/link";

export default function FooterA() {
  return (
    <footer className="bg-gradient-to-r from-[#0b1f17] to-[#0e2a20] text-gray-300">
       <img src="/images/background/footer-bg.jpg" alt="" className="w-full object-cover lg:h-24 h-48"/>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Contact */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Al<span className="text-green-500">Quran</span>
          </h2>
          <p className="text-sm mb-4">
            ampe jummah masjidh, <br /> Kotiyakumbura, <br/> srilanka
          </p>
          <p className="text-sm mb-6">
            +94 770472792
          </p>

          <div className="flex gap-3">
            {["F", "T", "I", "Y"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-greflex items-center justify-center text-white cursor-pointer hover:bg-green-600 transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Scholars</Link></li>
            <li><Link href="#">Courses</Link></li>
            <li><Link href="#">Latest News</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Other Link</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Online Courses</Link></li>
            <li><Link href="#">Audio Listening</Link></li>
            <li><Link href="#">Sehri & Iftar</Link></li>
            <li><Link href="#">Our Events</Link></li>
            <li><Link href="#">Quran Hifz Classes</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Waiting for your message is not your important time
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 w-70 h-30 rounded-lg bg-[#122c22] text-sm text-white outline-none"
            />
            <button className="absolute right-2 top-2 bg-yellow-400  text-black w-10 h-10 rounded-full font-bold">
              <img src="/images/background/telegram.svg" alt=""></img>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
     <div className="relative text-gray-300 text-sm">
      <img
        src="/images/background/footer-bg_2.jpg"
        alt="footer"
        className="w-full object-cover lg:h-24 h-48"
      />
          
      <p className="absolute bottom-8 left-5 text-white text-sm">
        All rights reserved 2025 © template_mr
      </p>
      <p className="absolute bottom-8 right-5 text-white text-sm gap-4 flex flex-row">
        <span className="cursor-pointer hover:text-green-500">
          Terms of use
        </span>
        <span className="cursor-pointer hover:text-green-500">
          Privacy Policy
        </span>
      </p>
    </div>
    </footer>
  );
}
