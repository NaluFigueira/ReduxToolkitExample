import React from "react";
import Button from "../Button";
import ProductQuantity from "./ProductQuantity";
import ProductImage from "../../../assets/images/imageThumb.png";
import { ProductCardContainer } from "./styles";
import { Product } from "../../../features/grid/gridSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardContainer>
      <img src={ProductImage} alt="productImage" />
      <h3>{product.name}</h3>
      <h4>Por {product.price}</h4>
      {product.quantity ? (
        <ProductQuantity quantity={product.quantity} />
      ) : (
        <Button onClick={() => undefined} title="Adicionar" />
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
