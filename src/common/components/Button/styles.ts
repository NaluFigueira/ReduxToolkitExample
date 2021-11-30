import styled from "styled-components";

export type ButtonType = "primary" | "secondary";

interface StyledButtonProps {
  buttonType: ButtonType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px;
  background-color: ${(props) =>
    props.buttonType === "primary" ? "var(--yellow)" : "#fff"};

  border-radius: 4px;
  border-color: ${(props) =>
    props.buttonType === "primary" ? "transparent" : "var(--yellow)"};
  border-style: solid;

  color: ${(props) =>
    props.buttonType === "primary" ? "var(--gray)" : "var(--yellow)"};
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;
`;
