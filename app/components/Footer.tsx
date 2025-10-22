"use client";

import React from 'react';

// --- Data for the Footer Links ---
interface FooterLink {
  label: string;
  href: string;
}

const leftLinks: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'How It Works', href: '/how-it-works' },
];

const rightLinks: FooterLink[] = [
  { label: 'Terms', href: '/terms' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Guide', href: '/guide' },
];

// --- Styling Objects ---

const footerContainerStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f8f8f8', // Light gray background from the screenshot
  width: '100%',
};

const topSectionStyle: React.CSSProperties = {
  padding: '60px 5%',
  display: 'flex',
  justifyContent: 'center',
};

const contentContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px', // Standard max width for content
  width: '100%',
};

const linksContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '100px', // Space between the two link columns
};

const linkColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const linkStyle: React.CSSProperties = {
  color: '#444444',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'color 0.2s',
  // You would typically use a pseudo-selector like :hover for the hover effect
  // '&:hover': { color: '#00cc66' } // Example with CSS-in-JS library
};

const logoSectionStyle: React.CSSProperties = {
  textAlign: 'right',
  minWidth: '250px', // Ensures the logo and socials have space
};

const logoTextStyle: React.CSSProperties = {
  fontSize: '36px',
  fontWeight: 700,
  color: '#28a745', // Bright green color for the logo text
};

const checkmarkStyle: React.CSSProperties = {
  marginRight: '5px',
  fontSize: '30px',
  fontWeight: 900,
  verticalAlign: 'text-bottom',
};

const reachOutStyle: React.CSSProperties = {
  marginTop: '15px',
  marginBottom: '10px',
  fontSize: '14px',
  color: '#666666',
};

const socialIconsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
};

// --- Social Icon Components (using inline SVGs) ---
const InstagramIcon: React.FC = () => (
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#C13584"/> {/* Instagram brand color */}
      <path fillRule="evenodd" clipRule="evenodd" d="M12 7.74998C9.65042 7.74998 7.75 9.65041 7.75 12C7.75 14.3496 9.65042 16.25 12 16.25C14.3496 16.25 16.25 14.3496 16.25 12C16.25 9.65041 14.3496 7.74998 12 7.74998ZM12 14.8333C10.4578 14.8333 9.16666 13.5422 9.16666 12C9.16666 10.4578 10.4578 9.16664 12 9.16664C13.5422 9.16664 14.8333 10.4578 14.8333 12C14.8333 13.5422 13.5422 14.8333 12 14.8333Z" fill="white"/>
      <path d="M16.9166 7.08331C17.3804 7.08331 17.75 6.71373 17.75 6.24998C17.75 5.78623 17.3804 5.41664 16.9166 5.41664C16.4529 5.41664 16.0833 5.78623 16.0833 6.24998C16.0833 6.71373 16.4529 7.08331 16.9166 7.08331Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C8.82433 3.5 3.5 4.19539 3.5 12C3.5 19.8046 8.82433 20.5 12 20.5C15.1757 20.5 20.5 19.8046 20.5 12C20.5 4.19539 15.1757 3.5 12 3.5ZM12 19.0833C9.07096 19.0833 4.91666 17.6166 4.91666 12C4.91666 6.38335 9.07096 4.91664 12 4.91664C14.929 4.91664 19.0833 6.38335 19.0833 12C19.0833 17.6166 14.929 19.0833 12 19.0833Z" fill="white"/>
    </svg>
  </a>
);

const FacebookIcon: React.FC = () => (
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#1877F2"/> {/* Facebook brand color */}
      <path d="M14.07 10.37V8.58C14.07 7.74 14.12 7.23 15.42 7.23H17.06V4H14.85C12.33 4 11.23 5.37 11.23 8.35V10.37H9V13.63H11.23V20H14.07V13.63H16.31L16.66 10.37H14.07Z" fill="white"/>
    </svg>
  </a>
);

const LinkedInIcon: React.FC = () => (
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#0077B5"/> {/* LinkedIn brand color */}
      <path d="M6.3 7.5V17.5H3.5V7.5H6.3ZM4.9 3.5C3.795 3.5 2.9 4.395 2.9 5.5C2.9 6.605 3.795 7.5 4.9 7.5C6.005 7.5 6.9 6.605 6.9 5.5C6.9 4.395 6.005 3.5 4.9 3.5ZM17.5 17.5H14.7V13.08C14.7 12.08 14.7 10.83 13.4 10.83C12.11 10.83 11.94 11.85 11.94 12.98V17.5H9.1V7.5H11.94V8.75H11.99C12.37 8.13 13.06 7.25 14.44 7.25C17.16 7.25 17.5 8.97 17.5 12.5V17.5Z" fill="white"/>
    </svg>
  </a>
);

// --- Bottom Copyright/Disclaimer Section ---
const bottomBarStyle: React.CSSProperties = {
  backgroundColor: '#f0f0f0', // Slightly darker gray for the bottom bar
  padding: '20px 5%',
  display: 'flex',
  justifyContent: 'center',
  borderTop: '1px solid #e5e5e5',
};

const bottomBarContentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  width: '100%',
  fontSize: '14px',
  color: '#666666',
};

const copyrightLinkStyle: React.CSSProperties = {
  color: '#666666',
  textDecoration: 'none',
  marginLeft: '25px', // Space between Privacy and Disclaimer
};

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer style={footerContainerStyle}>
      {/* Top section with navigation and logo/socials */}
      <div style={topSectionStyle}>
        <div style={contentContainerStyle}>
          
          {/* Left Side: Navigation Links */}
          <div style={linksContainerStyle}>
            {/* Column 1 */}
            <div style={linkColumnStyle}>
              {leftLinks.map((link) => (
                <a key={link.label} href={link.href} style={linkStyle}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div style={linkColumnStyle}>
              {rightLinks.map((link) => (
                <a key={link.label} href={link.href} style={linkStyle}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Logo and Socials */}
          <div style={logoSectionStyle}>
            {/* Logo */}
            <div style={logoTextStyle}>
              <span style={checkmarkStyle}>✓</span>Reddway
            </div>

            {/* Reach Out Text */}
            <div style={reachOutStyle}>
              Reach out to us
            </div>

            {/* Social Icons */}
            <div style={socialIconsStyle}>
              <InstagramIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and legal links */}
      <div style={bottomBarStyle}>
        <div style={bottomBarContentStyle}>
          <span>Copyright © 2023 Reddway Hyperspace Systems Private Limited</span>
          <div>
            <a href="/privacy" style={copyrightLinkStyle}>Privacy</a>
            <a href="/disclaimer" style={copyrightLinkStyle}>Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
