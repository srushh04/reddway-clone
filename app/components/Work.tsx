"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<number | null>(2);

  const steps = [
    {
      id: 1,
      title: "Create your store",
      description: "Simple sign-up, answer a few questions and your website is ready.",
    },
    {
      id: 2,
      title: "Add products to sell",
      description:
        "Upload your product information easily including descriptions, images, pricing, colours, sizes, quantity and more.",
    },
    {
      id: 3,
      title: "Go live and start selling",
      description: "In as little as 10 mins, you can go live with your website and start expanding your brand.",
    },
    {
      id: 4,
      title: "Boost your sales",
      description:
        "Get the best for your business with features like performance marketing, lead generation, sales funnel development, CRM activation, SEO, google analytics & Facebook pixel and much more.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 px-4">
        Here's how it works
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-16 w-full max-w-6xl px-4 sm:px-6">
        {/* Left Side: Steps */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="border-b border-gray-100 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setOpenStep(openStep === step.id ? null : step.id)
                }
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg flex-shrink-0">
                    {step.id}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                </div>

                <ChevronDown
                  className={`w-5 sm:w-6 h-5 sm:h-6 text-gray-600 transition-transform duration-300 ${
                    openStep === step.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Expandable Description */}
              {openStep === step.id && step.description && (
                <p className="text-gray-600 mt-3 ml-14 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image + Floating Icons */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            <img
              src="/laptop.png"
              alt="Dashboard preview"
              className="rounded-2xl shadow-xl w-[90%] max-w-[480px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px]"
            />

            {/* Floating Icons */}
            <img
              src="/rocket.png"
              alt="Rocket"
              className="absolute -top-8 sm:-top-10 left-2/3 sm:left-[65%] w-14 sm:w-20 h-14 sm:h-20 animate-bounce"
            />
            <img
              src="/rupee.png"
              alt="Rupee coin"
              className="absolute top-2 sm:top-[10%] right-[-16px] sm:right-[-20px] w-14 sm:w-20 h-14 sm:h-20 animate-float"
            />
            <img
              src="/calendar.png"
              alt="Calendar"
              className="absolute bottom-[-16px] sm:bottom-[-20px] left-12 sm:left-14 w-14 sm:w-20 h-14 sm:h-20 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
