"use client";

export default function AchievementSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-2xl overflow-hidden bg-green-700 grid grid-cols-1 lg:grid-cols-2">

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.png')] bg-center bg-no-repeat bg-cover opacity-20"></div>

          {/* LEFT SIDE */}
          <div className="relative z-10 p-10 lg:p-14 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Alhamdulillah We <br /> Have Reached Over
            </h2>

            <p className="mt-4 text-sm text-green-100 max-w-md">
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Students */}
            <div className="mt-10 flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-3xl">
                🤲
              </div>

              <div>
                <h3 className="text-4xl font-bold">18,000</h3>
                <p className="text-lg text-green-100">Active Students</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative z-10 p-6 lg:p-10 flex items-center">
            <div className="bg-white rounded-2xl border-8 border-yellow-400 p-8 w-full">

              {/* Rating */}
              <div className="flex gap-5 items-start">
                <div className="w-20 h-20 rounded-xl bg-yellow-400 flex flex-col items-center justify-center font-bold text-black">
                  <div className="text-xs">★ ★ ★</div>
                  <div className="text-2xl">4.5</div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Top Ratings On Trustpilot
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum generators on the internet tend to repeat
                    predefined chunks necessary on making this the first velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t"></div>

              {/* Pass Out */}
              <div className="flex gap-5 items-start">
                <div className="w-20 h-20 rounded-xl bg-green-700 text-white flex items-center justify-center text-2xl font-bold">
                  22k
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Pass Out
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt to labore et dolore pass out
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
