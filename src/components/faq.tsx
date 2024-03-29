import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQ = () => {
  const questions = [
    {
      question:
        "What does a web-solution cost?",
      answer:
        "The price of your web-solution depends on the amount of subpages, functionalities and integrations requested.",
    },
    {
      question: "What does an app-solution cost?",
      answer:
        "The price of your app-solution depends on the number of integrations and functionalities requested.",
    },
    {
      question: "How is the price for my project calculated?",
      answer:
        "The price for your project is calculated by taking the estimated project hours multiplied with an hourly salary of $39.",
    },
    {
      question: "Do you have a satisfaction guarantee?",
      answer:
        "Yes we do! As a customer at Gazella Team you only pay us, when you're satisfied with our work.",
    },
    {
      question: "How is the payment process?",
      answer:
        "We send you an invoice, with your prefered payment method.",
    },
  ];

  const FAQItem = ({ index, question, answer, openIndex, setOpenIndex }:{index:any, question:any, answer:any, openIndex:any, setOpenIndex:any}) => {
    const isOpen = index === openIndex;

    const toggleAccordion = () => {
      setOpenIndex(isOpen ? null : index);
    };

    return (
      <div onClick={toggleAccordion} className="faq-item bg-white cursor-pointer text-main p-[50px] rounded-[14px]">
        <div className={`question ${isOpen ? 'open' : ''}`}>
            <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-[500]'>{question}</h1>
            {isOpen ? <X />:<Plus />}
            </div>
          
        </div>

        {isOpen && <div className="answer mt-[20px] text-[18px] font-[400]">{answer}</div>}

      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='bg-gray-50 py-[70px]'>
      <div className="faq-container w-[95%] mx-auto flex flex-col max-w-main gap-[20px] lg:w-[90%]">
      {questions.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
    </section>
  );
};

export default FAQ;