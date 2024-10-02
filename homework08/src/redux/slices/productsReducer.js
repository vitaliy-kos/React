import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import products from '../../data/products';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async (_, thunkApi) => {
        try {
            var promise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(products);
                }, 100);
            });
            return promise;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    products: [],
    loading: false
}

const productsReducer = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
            });
    }
});

export default productsReducer.reducer;