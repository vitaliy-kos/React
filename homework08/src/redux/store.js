import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsReducer'
import cartReducer from './slices/cartReducer';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});

export default store;