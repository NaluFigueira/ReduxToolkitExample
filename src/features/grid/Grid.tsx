import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductCard from "../../common/components/ProductCard";
import { fetchProducts, getGridState } from "./gridSlice";
import { GridContainer } from "./gridStyle";

const Grid: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector(getGridState);

  const stableDispatch = useCallback(() => {
    return dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    stableDispatch();
  }, [stableDispatch]);

  return (
    <>
      {loading ? (
        <span>Carregando...</span>
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
