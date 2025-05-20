import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  Txt: string | React.ReactNode;
  className?: string;
  Variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({ Txt, className, Variant = "h2" }) => {
  const Component = Variant;

  return (
    <Component
      data-aos="fade-up"
      data-aos-delay="100"
      className={cn(
        "text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl xl:leading-[125%] font-bold text-primary-text-blue lg:mb-1",
        className
      )}
    >
      {Txt}
    </Component>
  );
};

export default Heading;
