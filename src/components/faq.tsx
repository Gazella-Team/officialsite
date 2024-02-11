import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import { Reveal } from "./Animations/Reveal";

const questions = [
  {
    question:
      "Hvad does a web-solution cost?",
    answer:
      "While Centox is tailored for gaming communities, its robust features and flexibility make it an excellent choice for any forum-based community seeking seamless Discord integration.",
  },
  {
    question: "Hvad does an app-solution cost?",
    answer:
      "Not at all! Centox is designed to be user-friendly. With our drag-n-drop interface, even those without technical know-how can easily set up and customize their forums.",
  },
  {
    question: "What is the price of a complete SaaS development?",
    answer:
      "No problem. While you can choose a subdomain, Centox also allows you to connect your forum to your unique domain, making it appear as your standalone website. (require paid plan)",
  },
  {
    question: "How is the price for my project calculated?",
    answer:
      "Absolutely. Every piece of information submitted through our forms, including passwords, is encrypted to ensure maximum security and privacy.",
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

export default function FAQ() {
  return (
    <section className="py-[70px]">
      <div className="w-[95%] mx-auto">
        <Accordion type="single" collapsible className="bg-white rounded-lg">
          {questions.map((question, index) => (
            <Reveal key={index}>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={index === 0 ? "py-2 pt-0" : "py-2"}
              >
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
