"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      image: "/man1.jpg",
      quote: "Reddway is user-friendly and efficient. Highly recommend!",
      name: "Krishan",
      role: "Founder of Space Store",
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
    <section className="bg-white py-16 sm:py-20 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 px-4">
        What our users say
      </h2>

      {/* Scrollable Container */}
      <div className="flex overflow-x-auto gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 pb-6 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex-shrink-0 w-[85%] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white rounded-3xl overflow-hidden shadow-md border-2 sm:border-4 border-green-600 snap-center"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Left: Image */}
              <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right: Text */}
              <div className="flex flex-col justify-center px-6 sm:px-8 py-6 md:w-1/2">
                <p className="text-base sm:text-lg font-semibold leading-relaxed text-gray-800 mb-4">
                  {t.quote}
                </p>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black">
                    {t.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
