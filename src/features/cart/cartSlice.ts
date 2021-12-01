import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../grid/gridSlice";

interface CartProduct extends Product {
  quantity: number;
}

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex > -1) {
        state.products[productIndex].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity--;
      } else {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export const getCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;
