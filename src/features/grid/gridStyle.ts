import styled from "styled-components";

export const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: 4em;
`;

export const Header = styled.div`
  width: 1044px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 4rem;

  a {
    margin-right: 8px;
  }
`;
