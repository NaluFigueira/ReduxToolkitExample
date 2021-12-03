import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../grid/gridSlice";

interface CartProduct extends Product {
  quantity: number;
}

export interface CartState {
  products: CartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;

      const productIndex = state.products.findIndex(
        (product) => product.id === selectedProduct.id
      );

      if (productIndex > -1) {
        state.products[productIndex].quantity++;
      } else {
        state.products.push({ ...selectedProduct, quantity: 1 });
      }

      state.totalPrice += Math.round(selectedProduct.price * 100) / 100;
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const selectedProductId = action.payload;

      const productIndex = state.products.findIndex(
        (product) => product.id === selectedProductId
      );

      state.totalPrice =
        (state.totalPrice * 100 - state.products[productIndex].price * 100) /
        100;

      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity--;
      } else {
        state.products.splice(productIndex, 1);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } =
  cartSlice.actions;

export const getCartState = (state: RootState) => state.cart;
export const getCartProducts = (state: RootState) => state.cart.products;
export const getCartTotalPrice = (state: RootState) => state.cart.totalPrice;

// export const GetCardStateHook = () => {
//   return useAppSelector((state: RootState) => state.cart);
// };

export default cartSlice.reducer;
