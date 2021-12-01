import React from "react";
import Button from "../../Button";
import { ProductQuantityContainer } from "./styles";

interface ProductQuantityProps {
  quantity: number;
  onMinusClick: () => void;
  onPlusClick: () => void;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
  quantity,
  onMinusClick,
  onPlusClick,
}) => {
  return (
    <ProductQuantityContainer>
      <Button onClick={onMinusClick} title="-" />
      <input type="number" value={quantity} readOnly />
      <Button onClick={onPlusClick} title="+" />
    </ProductQuantityContainer>
  );
};

export default ProductQuantity;
