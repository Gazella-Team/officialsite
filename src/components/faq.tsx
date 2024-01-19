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
    question: "Is Centox suitable for non-gaming communities as well?",
    answer:
      "While Centox is tailored for gaming communities, its robust features and flexibility make it an excellent choice for any forum-based community seeking seamless Discord integration.",
  },
  {
    question: "Do I need coding knowledge to set up my forum on Centox?",
    answer:
      "Not at all! Centox is designed to be user-friendly. With our drag-n-drop interface, even those without technical know-how can easily set up and customize their forums.",
  },
  {
    question: "What if I want my forum to have its unique domain?",
    answer:
      "No problem. While you can choose a subdomain, Centox also allows you to connect your forum to your unique domain, making it appear as your standalone website. (require paid plan)",
  },
  {
    question: "Is my data safe with Centox?",
    answer:
      "Absolutely. Every piece of information submitted through our forms, including passwords, is encrypted to ensure maximum security and privacy.",
  },
  {
    question: "Can I assign roles or staff members to manage applications?",
    answer:
      "Yes, Centox comes with a built-in staff system. You can add members to your organization, allowing them to comment on and approve applications.",
  },
  {
    question: "How often is Centox updated?",
    answer:
      "We believe in continuous improvement. Centox receives regular updates to introduce new features, enhance existing ones, and ensure overall platform stability.",
  },
];

export default function FAQ() {
  return (
    <section className="py-[60px]">
      <div className="w-[90%] mx-auto max-w-main">
        <Accordion type="single" collapsible className="bg-white rounded-lg">
          {questions.map((question, index) => (
            <Reveal key={index}>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="py-2"
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
