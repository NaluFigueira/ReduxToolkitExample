import styled from "styled-components";

export const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px;
    color: var(--gray);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
