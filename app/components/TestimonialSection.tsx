"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      image: "/man1.jpg", // replace with actual image in /public
      quote: "Reddway is user-friendly and efficient. Highly recommend!",
      name: "Krishan",
      role: "Founder of space store",
    },
    {
      id: 2,
      image: "/women2.jpg",
      quote: "Reddway helped me take my small business online in no time!",
      name: "Priya",
      role: "Boutique Owner",
    },
    {
      id: 3,
      image: "/man2.jpg",
      quote: "Fantastic platform with amazing support team!",
      name: "Amit",
      role: "Tech Entrepreneur",
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">What our users say</h2>

      {/* Scrollable Container */}
      <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-6 scrollbar-hide snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex-shrink-0 w-[600px] md:w-[700px] bg-white rounded-3xl overflow-hidden shadow-md border-4 border-green-600 snap-center"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left: Image */}
              <div className="w-full md:w-1/2 h-72 md:h-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right: Text */}
              <div className="flex flex-col justify-center px-8 py-6 md:w-1/2">
                <p className="text-lg font-semibold leading-relaxed text-gray-800 mb-4">
                  {t.quote}
                </p>
                <div>
                  <h3 className="text-lg font-bold text-black">{t.name}</h3>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
