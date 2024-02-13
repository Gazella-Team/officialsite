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
        "The price of your app-solution depends on the platofr",
    },
    {
      question: "How is the price for my project calculated?",
      answer:
        "The price for your project is calculated by taking the estimated project hours multiplied with an hourly salary of $39.",
    },
    {
      question: "Do you have a satisfaction guarantee?",
      answer:
        "Yes, Centox comes with a built-in staff system. You can add members to your organization, allowing them to comment on and approve applications.",
    },
    {
      question: "How is the payment process?",
      answer:
        "We believe in continuous improvement. Centox receives regular updates to introduce new features, enhance existing ones, and ensure overall platform stability.",
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
      <div className="faq-container w-[95%] mx-auto flex flex-col gap-[20px]">
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