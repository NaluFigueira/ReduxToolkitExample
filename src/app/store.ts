import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "../features/grid/gridSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    grid: gridReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
