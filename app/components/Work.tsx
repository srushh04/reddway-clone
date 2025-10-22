"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<number | null>(2);

  const steps = [
    {
      id: 1,
      title: "Create your store",
      description: "Simple sign-up, answer few questions and your website is ready.",
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
      description: "In as little as 10 mins, you can go live with your website and start expanding your brand",
    },
    {
      id: 4,
      title: "Boost your sales",
      description: "Get the best for your business with features like performance marketing, lead generation, sales funnel development, CRM activation, SEO, google analytics & Facebook pixel and much more",
    },
  ];

  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Here's how it works
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-6xl px-6">
        {/* Left Side: Steps */}
        <div className="flex flex-col w-full md:w-1/2 space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="border-b border-gray-100 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setOpenStep(openStep === step.id ? null : step.id)
                }
              >
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>

                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                    openStep === step.id ? "rotate-180" : ""
                  }`}
                />
              </div>

                {/* Expandable Description */}
              {openStep === step.id && step.description && (
                <p className="text-gray-600 mt-3 ml-14 leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image + Floating Icons */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/laptop.png" // 👉 Replace with your own dashboard image
              alt="Dashboard preview"
              className="rounded-2xl shadow-xl w-[480px]"
            />

            {/* Floating 3D-style icons (you can replace with your own PNGs) */}
            <img
              src="/rocket.png" // 🚀 Replace with your rocket image
              alt="Rocket"
              className="absolute -top-10 left-[60%] w-20 h-20 animate-bounce"
            />
            <img
              src="/rupee.png" // 💰 Replace with your rupee coin image
              alt="Rupee coin"
              className="absolute top-[10%] right-[-20px] w-20 h-20 animate-float"
            />
            <img
              src="/calendar.png" // 📅 Replace with your calendar image
              alt="Calendar"
              className="absolute bottom-[-20px] left-[50px] w-20 h-20 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
