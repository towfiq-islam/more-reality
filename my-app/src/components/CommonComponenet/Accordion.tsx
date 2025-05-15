"use client";
import React, { useState } from "react";
import { ArrowDownSVg, ArrowUpSvg } from "../SvgContainer/SvgContainer";
import Button from "../Tags/Button/Button";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number>(1); // 2nd one open by default

  const toggle = (index: number) => {
    if (openIndex === index) return; // prevent closing all
    setOpenIndex(index);
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="bg-off-gray text-2xl font-medium leading-[166%] py-8 px-10 flex flex-col gap-y-6"
          >
            <Button
              onClick={() => toggle(index)}
              Txt={
                <div className="flex justify-between items-center w-full">
                  <span>
                    {index + 1}. {item.title}
                  </span>
                  <div className="cursor-pointer">
                    {isOpen ? <ArrowUpSvg /> : <ArrowDownSVg />}
                  </div>
                </div>
              }
              className="w-full text-left"
            />
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <span className="text-left text-base font-normal leading-[150%] block">
                {item.content}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
