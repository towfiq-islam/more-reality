import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import React from "react";
import Accordion from "../../CommonComponenet/Accordion";

const faqData = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    title: "What is an Accordion?",
    content:
      "An accordion is a vertically stacked set of interactive headings that each reveal or hide a section of content.",
  },
  {
    title: "What is an Accordion?",
    content:
      "An accordion is a vertically stacked set of interactive headings that each reveal or hide a section of content.",
  },
];

const FaqSection = () => {
  return (
    <section
      className="flex flex-col gap-y-10 pb-[120px] h-auto w-full  container
     "
    >
      <div className="flex flex-col gap-y-5 items-center ">
        <Heading
          Variant="h4"
          Txt={"Frequently Asked Questions"}
          className="testimonial-heading"
        />
        <Paragraph
          Txt={
            "Stay informed with expert tips, market insights, and home buying guides — everything you need to make smart real estate decisions."
          }
          className=" section-sub-heading-one font-normal opacity-[80] max-w-[889px] text-center !text-[#494949] "
        />
      </div>
      <div>
        <Accordion items={faqData} />
      </div>
    </section>
  );
};

export default FaqSection;
