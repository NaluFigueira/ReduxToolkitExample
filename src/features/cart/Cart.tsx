import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import ProductCard from "../../common/components/ProductCard";
import { GridContainer } from "../grid/gridStyle";
import { getCartState } from "./cartSlice";
import { Container, TitleContainer } from "./cartStyle";

const Cart: React.FC = () => {
  const { products } = useAppSelector(getCartState);

  return (
    <Container>
      <TitleContainer>
        <h1>Carrinho</h1>
        <Link to="/">Voltar ao início</Link>
      </TitleContainer>
      <GridContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default Cart;
