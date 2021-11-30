import React from "react";
import { StyledButton, ButtonType } from "./styles";

interface ButtonProps {
  onClick: () => void;
  title: string;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, type }) => {
  return (
    <StyledButton buttonType={type || "primary"} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
