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
    <Component className={cn("text-5xl leading-[125%] font-bold text-primary-text-blue mb-1", className)}>
      {Txt}
    </Component>
  );
};

export default Heading;
