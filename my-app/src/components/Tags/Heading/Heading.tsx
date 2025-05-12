type ButtonProps = {
  Txt: string | React.ReactNode;
  onClick?: () => void;
  className: string;
  Variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<ButtonProps> = ({
  Txt,
  onClick,
  className,
  Variant = "h2",
}) => {
  return (
    <Variant className={className} onClick={onClick}>
      {Txt}
    </Variant>
  );
};

export default Heading;
