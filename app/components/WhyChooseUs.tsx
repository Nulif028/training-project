"use client";

const features = [
  {
    title: "Expert Quran Tutor",
    bg: "bg-[#FBF8EC]",
    icon: "📖",
  },
  {
    title: "We Value Our Students",
    bg: "bg-[#EAF6F1]",
    icon: "🧎",
  },
  {
    title: "Male Female Teachers",
    bg: "bg-[#FBF8EC]",
    icon: "🎓",
  },
  {
    title: "Flexible Timings",
    bg: "bg-[#F3F5EC]",
    icon: "⏱️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold tracking-widest text-sm mb-3">
            WHY TO CHOOSE US
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Why Choose Our Islamic <br /> Institute
          </h2>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-[32px] border border-black/80 p-10 text-center`}
            >
              
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center border border-black">
                <span className="text-3xl">{item.icon}</span>
              </div>

              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

            
              <p className="text-gray-600 text-sm leading-relaxed">
                All the classes of online <br />
                Quran teaching are <br />
                conducted by well qualified <br />
                Islamic scholars
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
