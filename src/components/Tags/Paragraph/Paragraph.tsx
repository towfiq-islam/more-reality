type ButtonProps = {
  Txt: string | React.ReactNode;
  onClick?: () => void;
  className: string;
};

const Paragraph: React.FC<ButtonProps> = ({
  Txt,
  onClick,
  className,
}) => {
  return (
    <p className={className} onClick={onClick}>
      {Txt}
    </p>
  );
};

export default Paragraph;
