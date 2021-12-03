import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchProducts as _fetchProducts } from "./gridAPI";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface GridState {
  products: Product[];
  loading: boolean;
}

const initialState: GridState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "grid/fetchProducts",
  async () => {
    const response = await _fetchProducts();
    return response.data;
  }
);

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const getGridState = (state: RootState) => state.grid;

// export const GetGridStateHook = () => {
//   return useAppSelector((state: RootState) => state.grid);
// };

export default gridSlice.reducer;
