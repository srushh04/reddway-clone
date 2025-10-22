"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center min-w-[250px]">
          <span className="text-3xl font-bold text-green-500 mr-2">✓</span>
          <span className="text-3xl font-bold text-green-500">Reddway</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-black font-bold hover:text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-black font-bold hover:text-gray-700">
            Sign In
          </a>
          <button className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2">
            Create a Free Store <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4">
          <a href="#" className="block text-gray-700 font-semibold hover:text-black">
            Pricing
          </a>
          <a href="#" className="block text-gray-700 font-semibold hover:text-black">
            Sign In
          </a>
          <button className="w-full bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition flex justify-center items-center gap-2">
            Create a Free Store <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}
