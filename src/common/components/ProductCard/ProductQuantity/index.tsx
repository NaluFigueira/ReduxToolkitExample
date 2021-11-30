import React from "react";
import Button from "../../Button";
import { ProductQuantityContainer } from "./styles";

interface ProductQuantityProps {
  quantity: number;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ quantity }) => {
  return (
    <ProductQuantityContainer>
      <Button onClick={() => undefined} title="-" />
      <input type="number" value={quantity} />
      <Button onClick={() => undefined} title="+" />
    </ProductQuantityContainer>
  );
};

export default ProductQuantity;
