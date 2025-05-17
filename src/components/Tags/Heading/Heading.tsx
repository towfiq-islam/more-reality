type ButtonProps = {
  Txt: string | React.ReactNode;
  // onClick?: () => void;
  className: string;
  Variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

// onClick,
const Heading: React.FC<ButtonProps> = ({ Txt, className, Variant = "h2" }) => {
  return (
    // onClick={onClick}
    <Variant className={className}>
      {Txt}
    </Variant>
  );
};

export default Heading;
