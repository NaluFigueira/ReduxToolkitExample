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
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex > -1) {
        state.products[productIndex].quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
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
      state.totalPrice -= state.products[productIndex].price;
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

export default cartSlice.reducer;
