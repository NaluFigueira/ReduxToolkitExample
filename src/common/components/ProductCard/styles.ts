import styled from "styled-components";

export const ProductCardContainer = styled.div`
  border: 1px solid var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 12vw;
  padding: 24px;

  img {
    max-width: 70%;
    margin-bottom: 12px;
  }

  h3 {
    margin: 4px 0px;
    text-align: center;
  }

  h4 {
    margin-top: 4px;
    margin-bottom: 12px;
  }
`;
