import type React from "react";

interface buttonProps {
  title: string;
  variant: string;
  className?: string;
  onClick?: () => void; 
}

export const Button: React.FC<buttonProps> = ({
  title,
  variant,
  className = "",
  onClick,
}) => {
  const primary = `
  bg-[#76153C] text-white p-4 rounded-lg
  hover:shadow-lg 
  transition-all duration-300`;
  const outline = `
  border border-[#76153C] text-[#76153C] p-4 rounded-lg
  hover:bg-[#76153C] hover:text-white
  transition-all duration-300
  `;

  return (
    <button
    onClick={onClick}
      className={`${variant == "primary" ? primary : outline} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;