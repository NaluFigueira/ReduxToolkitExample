import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductCard from "../../common/components/ProductCard";
import { getCartState } from "../cart/cartSlice";
import { fetchProducts, getGridState } from "./gridSlice";
import { GridContainer, Header } from "./gridStyle";

const Grid: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector(getGridState);
  const cart = useAppSelector(getCartState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header>
        <Link to="/cart">Ir para o carrinho</Link>
        <span>{cart.products.length} itens</span>
      </Header>
      {loading ? (
        <GridContainer>
          <span>Carregando...</span>
        </GridContainer>
      ) : (
        <GridContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default Grid;
