"use client";

import React, { useState } from "react";

// FAQ Item interface
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

// FAQ data
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Reddway?",
    answer:
      "Reddway is a platform for e-commerce sellers to create rich e-commerce experiences for their customers. Our products are No-Code website builder and Instant Product Link, where users can start beautiful E-commerce websites and create sharable product link",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "What are the goals for this project?",
    answer:
      "The main goal is to empower small businesses and individual creators by providing a feature-rich, low-cost platform to sell their goods globally.",
  },
  {
    id: 3,
    question: "How does it work?",
    answer:
      "It works by allowing you to upload product listings, manage inventory, process orders, and receive payments all from a single dashboard.",
  },
  {
    id: 4,
    question: "Who can create a store?",
    answer:
      "Anyone, from independent artists to established small businesses, can create a store on the platform.",
  },
  {
    id: 5,
    question: "What are the pricing models?",
    answer:
      "We offer a free tier with basic features and paid subscriptions with advanced analytics and lower transaction fees.",
  },
  {
    id: 6,
    question: "How will we receive our payments?",
    answer:
      "Payments are processed securely via third-party services (e.g., Stripe/PayPal) and transferred directly to your linked bank account.",
  },
];

// Single FAQ item component
const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  return (
    <div
      className={`mb-4 border border-gray-200 rounded-xl bg-white cursor-pointer transition-shadow duration-300 ${
        isOpen ? "shadow-lg" : "shadow-sm"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center p-4 sm:p-5 text-base sm:text-lg font-semibold text-gray-900">
        <span className="mr-4 w-6 text-center text-lg sm:text-xl font-bold">
          {isOpen ? "−" : "+"}
        </span>
        <span>
          <span className="font-bold">{item.id}.</span> {item.question}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100">
          {item.answer}
        </div>
      )}
    </div>
  );
};

// Main FAQ section
const QuestionSection: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {faqData.map((item) => (
        <FAQItemComponent key={item.id} item={item} />
      ))}
    </section>
  );
};

export default QuestionSection;
