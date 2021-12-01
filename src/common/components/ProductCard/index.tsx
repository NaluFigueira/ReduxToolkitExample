import React, { useEffect, useState } from "react";
import Button from "../Button";
import ProductQuantity from "./ProductQuantity";
import ProductImage from "../../../assets/images/imageThumb.png";
import { ProductCardContainer } from "./styles";
import { Product } from "../../../features/grid/gridSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addProductToCart,
  getCartState,
  removeProductFromCart,
} from "../../../features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);
  const { products } = useAppSelector(getCartState);

  useEffect(() => {
    const getProductQuantity = (productId: string): number => {
      const selectedProduct = products.find(
        (cartProduct) => cartProduct.id === productId
      );

      if (selectedProduct) {
        return selectedProduct.quantity;
      }

      return 0;
    };

    setQuantity(getProductQuantity(product.id));
  }, [product, products]);

  const handleAddProductToCart = (product: Product) => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveProductFromCart = (productId: string) => {
    dispatch(removeProductFromCart(productId));
  };

  return (
    <ProductCardContainer>
      <img src={ProductImage} alt="productImage" />
      <h3>{product.name}</h3>
      <h4>Por {product.price}</h4>
      {quantity ? (
        <ProductQuantity
          onPlusClick={() => handleAddProductToCart(product)}
          onMinusClick={() => handleRemoveProductFromCart(product.id)}
          quantity={quantity}
        />
      ) : (
        <Button
          onClick={() => handleAddProductToCart(product)}
          title="Adicionar"
        />
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
