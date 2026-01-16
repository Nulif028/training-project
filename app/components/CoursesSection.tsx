"use client";

import Image from "next/image";

const courses = [
  {
    title: "Quran Intermediate Course brother",
    image: "/images/resource/course-1.jpg",
  },
  {
    title: "Online Quran Classes For Ladies",
    image: "/images/resource/course-2.jpg",
  },
  {
    title: "Online Quran Classes for Kids",
    image: "/images/resource/course-3.jpg",
  },
  {
    title: "Hifz Quran (Quran Memorization Course)",
    image: "/images/resource/course-4.jpg",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-[#FBF9F3] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold tracking-widest text-sm">
            POPULAR COURSES
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Our Arabic & Islamic Courses
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-[220px] object-cover"
                />

                {/* Avatar Icon */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                  <span className="text-green-600 text-xl">👳</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-10">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  {course.title}
                </h3>

                {/* Meta Info */}
                <div className="flex justify-between text-center text-sm mb-4">
                  <div>
                    <p className="text-green-600 font-bold">20</p>
                    <p className="text-black">lessons</p>
                  </div>
                  <div>
                    <p className="text-green-600 font-bold">10</p>
                    <p className="text-black">weeks</p>
                  </div>
                  <div>
                    <p className="text-green-600 font-bold">50</p>
                    <p className="text-black">enroll</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-6">
                  There are many variations of lorem class passages of lorem
                  ipsum available online
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition">
                    Study Now
                  </button>

                  <p className="text-sm font-semibold">
                    <span className="line-through text-gray-400 mr-1">
                      $45.00
                    </span>
                    $32.00
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
