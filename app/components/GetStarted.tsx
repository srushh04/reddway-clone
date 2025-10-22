"use client";

import { ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-green-50 flex justify-center items-center px-4">
      <div className="text-center max-w-3xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-snug">
          Going digital has never been easier – we promise!
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8">
          Reddway has everything you need to run an online business in India.
          Get started with a free website.
        </p>

        {/* Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base md:text-lg lg:text-lg font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started
          <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
