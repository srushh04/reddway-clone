"use client";

import { ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="py-24 bg-green-50 flex justify-center items-center">
      <div className="text-center max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
          Going digital has never been easier – we promise!
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Reddway has everything you need to run an online business in India.
          Get started with a free website.
        </p>

        <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
