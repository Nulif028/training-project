export default function PricingSection() {
  const plans = [
    {
      price: 32,
      classes: "2 Classes Per Week",
      students: "2,000+ Students Enrolled",
      items: [
        "8 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: 48,
      classes: "3 Classes Per Week",
      students: "3,000+ Students Enrolled",
      items: [
        "12 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: 60,
      classes: "4 Classes Per Week",
      students: "5,000+ Students Enrolled",
      items: [
        "16 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: 80,
      classes: "5 Classes Per Week",
      students: "6,000+ Students Enrolled",
      items: [
        "20 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold uppercase tracking-wide mb-2">
            Why To Choose Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Our Islamic Institute
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#FBF8EB] border border-black rounded-[40px] px-6 py-10 text-center"
            >
              {/* Price Circle */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-400 border border-black flex flex-col items-center justify-center">
                <span className=" text-black text-2xl font-bold">${plan.price}</span>
                <span className="text-black text-sm font-semibold">/Mo</span>
              </div>

              {/* Title */}
              <h3 className="text-black font-bold text-lg mb-4">
                {plan.classes}
              </h3>

              {/* Students */}
              <div className="text-black bg-yellow-200 text-sm font-medium py-2 px-3 rounded-md mb-6">
                • {plan.students}
              </div>

              {/* Features */}
              <ul className="text-sm text-gray-700 space-y-2 mb-8">
                {plan.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
                Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
