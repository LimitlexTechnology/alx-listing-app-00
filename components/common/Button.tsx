import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
//this is a nice button component
    <button
      onClick={onClick}
      className={`px-8 py-3 font-medium text-[20px]/[1.5] rounded-[60px] ${style}`}
    >
      {label}

    </button>
  );
};

export default Button;
