interface ButtonProps {
  text: string;
  size?: "lg" | "md" | "sm";
}

const Button = ({ size = "lg", text }: ButtonProps) => {
  const sizeType = {
    lg: "py-5 px-5",
    md: "py-3 px-3",
    sm: "py-2 px-2",
  };
  return (
    <button
      className={`bg-secondary ${sizeType[size]} rounded-[12px] text-lightBase w-full`}
    >
      {text}
    </button>
  );
};

export default Button;
