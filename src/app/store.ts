import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import gridSlice from "../features/grid/gridSlice";

export const store = configureStore({
  reducer: {
    grid: gridSlice,
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
