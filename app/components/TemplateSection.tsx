"use client";

export default function TemplatesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Get amazing templates for your business
        </h2>
      </div>

      {/* Full-width Image */}
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        <img
          src="/img1.jpg"
          alt="Business templates"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
