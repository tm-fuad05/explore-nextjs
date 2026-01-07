"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const page = () => {
  interface FAQ {
    id: number;
    question: string;
    answer: string;
  }
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "You can return any product within 7 days of delivery if it is unused and in original condition.",
    },
    {
      id: 2,
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3–5 business days depending on your location.",
    },
    {
      id: 3,
      question: "Do you offer cash on delivery?",
      answer: "Yes, we offer cash on delivery in selected areas.",
    },
    {
      id: 4,
      question: "Is online payment secure?",
      answer:
        "Absolutely. All payments are processed through secure and encrypted gateways.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-xl ml-20 mt-20">
      {faqs.map(({ id, question, answer }, index) => (
        <div key={id} className="flex flex-col border-t border-gray-50 py-2">
          <div
            className={`${
              open === index
                ? "text-blue-500"
                : "text-white hover:text-blue-500"
            } flex justify-between items-center cursor-pointer`}
            onClick={() => setOpen((prev) => (prev === index ? null : index))}
          >
            <h2 className="text-xl font-semibold">{question}</h2>
            <button>
              <ChevronDown
                className={`${
                  open === index ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
              />
            </button>
          </div>
          <div
            className={`${
              open === index
                ? "grid-rows-[1fr] opacity-100 pt-2"
                : "grid-rows-[0fr] opacity-0"
            } transition-all duration-300 text-gray-500 grid overflow-hidden`}
          >
            <p className="overflow-hidden">{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
