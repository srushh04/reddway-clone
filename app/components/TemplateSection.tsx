"use client";

export default function TemplatesSection() {
  return (
    <section className="py-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Get amazing templates for your business
        </h2>
      </div>

      {/* Full-width Image */}
      <div className="w-full h-[70vh] md:h-[90vh] overflow-hidden">
        <img
          src="/img1.jpg"
          alt="Business templates"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
