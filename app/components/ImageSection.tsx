import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {["course1.jpg", "course2.jpg", "hero.jpg"].map((img, i) => (
        <div key={i} className="border rounded overflow-hidden">
          <Image
            src={`/images/${img}`}
            alt="photo"
            width={400}
            height={250}
            className="w-full h-60 object-cover"
          />
        </div>
      ))}
    </section>
  );
}
