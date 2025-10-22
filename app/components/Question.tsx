"use client";
import React, { useState } from 'react';

// Define the structure for a single FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  defaultOpen?: boolean; 
}

// The list of questions and answers to be displayed
const faqData: FAQItem[] = [
  { 
    id: 1, 
    question: 'What is Reddway?', 
    answer: 'Reddway is a platform for e-commerce sellers to create rich e-commerce experiences for their customers. Our products are No-Code website builder and Instant Product Link, where users can start beautiful E-commerce websites and create sharable product link', 
    defaultOpen: true // This item is open by default, as shown in the screenshot
  },
  { id: 2, question: 'What are the goals for this project?', answer: 'The main goal is to empower small businesses and individual creators by providing a feature-rich, low-cost platform to sell their goods globally.' },
  { id: 3, question: 'How does it work?', answer: 'It works by allowing you to upload product listings, manage inventory, process orders, and receive payments all from a single dashboard.' },
  { id: 4, question: 'Who can create a store?', answer: 'Anyone, from independent artists to established small businesses, can create a store on the platform.' },
  { id: 5, question: 'What are the pricing model?', answer: 'We offer a free tier with basic features and paid subscriptions with advanced analytics and lower transaction fees.' },
  { id: 6, question: 'How will we receive our payments?', answer: 'Payments are processed securely via third-party services (e.g., Stripe/PayPal) and transferred directly to your linked bank account.' },
  // ... more items can be added
];

/**
 * Renders a single FAQ item that can be expanded or collapsed.
 */
const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

  // Styling for the main container, mimicking the card-like structure
  const itemStyle: React.CSSProperties = {
    marginBottom: '12px', // Slightly larger margin for separation
    border: '1px solid #e0e0e0',
    borderRadius: '10px', // Larger border radius for a softer look
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    // Apply a more noticeable shadow when expanded
    boxShadow: isOpen ? '0 5px 20px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)', 
    transition: 'box-shadow 0.3s ease',
  };

  // Styling for the question header/button area
  const questionStyle: React.CSSProperties = {
    padding: '18px 25px', // Increased padding for a bigger feel
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px', // Slightly larger font for the question text
    fontWeight: 600, // Make the question text bolder
    color: '#1a1a1a', // Darker text color
  };

  // Styling for the '+' / '-' icon and the question number
  const prefixStyle: React.CSSProperties = {
    fontSize: '22px', // **Bigger icon size**
    fontWeight: 800, // **Bolder icon and number**
    color: isOpen ? '#1a1a1a' : '#555555', // Darker color for prominence
    marginRight: '15px',
    width: '25px', // Ensure alignment
    textAlign: 'center',
  };

  // Styling for the answer content
  const answerStyle: React.CSSProperties = {
    padding: isOpen ? '0 25px 20px 25px' : '0 25px', // Increased padding
    fontSize: '16px', // Slightly larger answer text
     fontWeight: 700,
    lineHeight: '1.6',
    color: '#555555',
    borderTop: isOpen ? '1px solid #f0f0f0' : 'none', 
    maxHeight: isOpen ? '500px' : '0', 
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
  };

  // Styling for the paragraph inside the answer div
  const paragraphStyle: React.CSSProperties = {
    margin: '0',
    paddingTop: '20px', // Adds space between the top border and the text
  };


  return (
    <div style={itemStyle} onClick={() => setIsOpen(!isOpen)}>
      <div style={questionStyle}>
        {/* Toggle Icon and Number */}
        <span style={prefixStyle}>
          {isOpen ? '−' : '+'}
        </span>
        <span>
            <span style={{fontWeight: 700}}>{item.id}.</span> {item.question}
        </span>
      </div>
      <div style={answerStyle}>
        <p style={paragraphStyle}>{item.answer}</p>
      </div>
    </div>
  );
};

/**
 * Main component to display the entire FAQ section.
 */
const QuestionSection: React.FC = () => {
  // Container style to mimic the page background and width
  const containerStyle: React.CSSProperties = {
    maxWidth: '850px', // Slightly wider container
    margin: '50px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      {faqData.map((item) => (
        <FAQItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default QuestionSection;