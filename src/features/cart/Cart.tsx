import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../common/components/Button";
import ProductCard from "../../common/components/ProductCard";
import { GridContainer } from "../grid/gridStyle";
import { clearCart, getCartProducts, getCartTotalPrice } from "./cartSlice";
import { Container, TitleContainer } from "./cartStyle";

const Cart: React.FC = () => {
  const products = useAppSelector(getCartProducts);
  const totalPrice = useAppSelector(getCartTotalPrice);
  const dispatch = useAppDispatch();

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
      <h4>Total: R$ {totalPrice}</h4>
      <div className="actionButtons">
        <Button title="Finalizar compra" onClick={() => undefined} />
        <Button
          title="Limpar carrinho"
          type="secondary"
          onClick={() => dispatch(clearCart())}
        />
      </div>
    </Container>
  );
};

export default Cart;
