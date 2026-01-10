import Image from "next/image";

export default function Courses() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <h3 className="text-2xl font-bold text-center mb-10">
        Popular Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((c) => (
          <div key={c} className="border rounded overflow-hidden">
            <Image
              src="/images/course1.jpg"
              alt="course"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold">Arabic Course</h4>
              <button className="text-green-600 text-sm mt-2">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
