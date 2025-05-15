"use client";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FaqCardProps {
  id: number;
  title: string;
  description: string;
}

const faqData: FaqCardProps[] = [
  {
    id: 1,
    title: "Are all listings verified?",
    description:
      "We do not charge any browsing or inquiry fees. However, standard agent commissions or legal fees may apply, depending on the transaction.",
  },
  {
    id: 2,
    title: "Do you charge any fees for buyers or renters?",
    description:
      "We do not charge any browsing or inquiry fees. However, standard agent commissions or legal fees may apply, depending on the transaction.",
  },
  {
    id: 3,
    title: "How long does it take to buy or rent a property?",
    description:
      "We do not charge any browsing or inquiry fees. However, standard agent commissions or legal fees may apply, depending on the transaction.",
  },
  {
    id: 4,
    title: "Can I schedule a property visit through the website?",
    description:
      "We do not charge any browsing or inquiry fees. However, standard agent commissions or legal fees may apply, depending on the transaction.",
  },
];

const FaqSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="container h-auto pb-[120px] cursor-pointer flex flex-col gap-y-[60px]">
      <div className="flex flex-col items-center gap-y-2 ">
        <Heading
          Variant="h4"
          Txt={"Frequently Asked Questions"}
          className="testimonial-heading"
        />
        <Paragraph
          Txt={
            "FAQs and answers on a particular topic you product on Residence"
          }
          className=" section-sub-heading-one font-normal opacity-[80] max-w-[889px] text-center !text-secondary-text "
        />
      </div>
      <div className="mt-[40px] flex flex-col gap-[40px] h-auto">
        {faqData.map((faq) => {
          const isActive = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className={`bg-secondary-gray rounded-md py-[33px] pl-[40px] pr-[60px] cursor-pointer transition-all duration-300`}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-[24px] leading-10 text-primary-text-blue">
                  {faq.id}. {faq.title}
                </p>
                {isActive ? (
                  <ChevronUp className="w-10 h-10 text-gray-600" />
                ) : (
                  <ChevronDown className="w-10 h-10 text-gray-600" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600">{faq.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
