// FAQComponent.tsx

import React, { useState } from "react";

// Define the type for FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  // Define the initial state for the index of the currently expanded item
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null
  );

  // FAQ data - replace with your own questions and answers
  const faqData: FAQItem[] = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React using npm or yarn. For example, "npm install react".',
    },
    // Add more questions and answers as needed
  ];

  // Function to toggle the expanded/collapsed status of an item
  const toggleItem = (index: number) => {
    setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main bg-gray-50 border-[1px] border-b-[0px] rounded-[6px] p-[0px] px-0">
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li
              key={index}
              className={`faq-item ${
                expandedItemIndex === index ? "expanded" : "collapsed"
              }`}
            >
              <div
                className="border-b-[1px] rounded-b-[6px] p-[30px]"
                onClick={() => toggleItem(index)}
              >
                {item.question}
                {expandedItemIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
