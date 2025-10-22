"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const checkmarkStyle: React.CSSProperties = {
    marginRight: '5px',
    fontSize: '25px',
    fontWeight: 900,
    verticalAlign: 'text-bottom',
  };
  const logoSectionStyle: React.CSSProperties = {
    textAlign: 'left',
    minWidth: '250px', // Ensures the logo and socials have space
  };
  
  const logoTextStyle: React.CSSProperties = {
    fontSize: '30px',
    fontWeight: 700,
    color: '#28a745', // Bright green color for the logo text
  };
  return (
     <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div style={logoSectionStyle}>
            {/* Logo */}
            <div style={logoTextStyle}>
              <span style={checkmarkStyle}>✓</span>Reddway
            </div>
      </div>
      {/* Links */}
      <div className="flex items-center gap-8">
        <a href="#" className="text-black font-bold hover:text-black">
          Pricing
        </a>
        <a href="#" className="text-black font-bold hover:text-black">
          Sign In
        </a>
        <button className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2">
          Create a Free Store <ArrowRight size={16} />
        </button>
      </div>

      {/* Mobile menu */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-black">
          Pricing
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Sign In
        </a>
        <button className="bg-black text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition flex items-center gap-2">
          Create a Free Store <ArrowRight size={16} />
        </button>
      </div>
      )}
    </nav>
  );
}
