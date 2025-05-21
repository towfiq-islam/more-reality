"use client";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="pb-10 xl:pb-20 3xl:pb-[120px] lg:px-5 3xl:px-0">
      <div className="container cursor-pointer flex flex-col gap-y-10 3xl:gap-y-[60px]">
        <div className="flex flex-col items-center gap-y-2 ">
          <Heading Variant="h4" Txt={"Frequently Asked Questions"} />
          <Paragraph
            className="text-center"
            Txt={
              "FAQs and answers on a particular topic you product on Residence"
            }
          />
        </div>
        <div className="xl:mt-5 flex flex-col gap-5 lg:gap-7 3xl:gap-8 h-auto">
          {faqData.map(faq => {
            const isActive = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-secondary-gray rounded-md bg-[#F8F8F8] py-3 lg:py-5 3xl:py-[33px] px-3 lg:px-7 2xl:px-8 cursor-pointer transition-all duration-300`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="font-medium text-lg lg:text-xl xl:text-[22px] 2xl:text-[24px] lg:leading-10 text-primary-text-blue"
                  >
                    {faq.id}. {faq.title}
                  </p>
                  {isActive ? (
                    <div className="flex-shrink-0">
                      <ChevronUp
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="w-8 lg:w-10 h-8 lg:h-10 text-gray-600 flex-shrink-0"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0">
                      <ChevronDown
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="w-8 lg:w-10 h-8 lg:h-10 text-gray-600"
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive
                      ? "max-h-[500px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className=" text-secondary-text"
                  >
                    {faq.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
