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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 sm:mb-16 text-gray-900">
          Unlock more as your business grows.
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} w-full max-w-xs sm:max-w-[18rem] h-[16rem] sm:h-64 rounded-2xl flex flex-col justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6`}
            >
              <div className="text-green-700 mb-4 sm:mb-5">{feature.icon}</div>
              <p className="text-base sm:text-lg font-medium text-gray-800 px-2 sm:px-5 leading-snug">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
