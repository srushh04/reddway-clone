"use client";

import { Globe, FileText, BarChart3, Banknote } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Custom domain setup",
      icon: <Globe size={56} strokeWidth={1.5} />,
      bg: "bg-pink-100",
    },
    {
      title: "Copywriting & image selection",
      icon: <FileText size={56} strokeWidth={1.5} />,
      bg: "bg-orange-100",
    },
    {
      title: "Integrated marketing tools",
      icon: <BarChart3 size={56} strokeWidth={1.5} />,
      bg: "bg-sky-100",
    },
    {
      title: "Secure payment gateway",
      icon: <Banknote size={56} strokeWidth={1.5} />,
      bg: "bg-green-100",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-gray-900">
          Unlock more as your business grows.
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} w-64 h-64 rounded-2xl flex flex-col justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-green-700 mb-5">{feature.icon}</div>
              <p className="text-lg font-medium text-gray-800 px-5 leading-snug">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
