import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(item => item.product.id === action.payload.id);
            const isExist = item ? true : false;
            
            if (isExist) {
                item.quantity += 1;
            } else {
                const newItem = {
                    product: action.payload,
                    quantity: 1
                }
                state.items.push(newItem);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.product.id !== action.payload);
        },
        setQuantity: (state, action) => {
            const item = state.items.find(item => item.product.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.value;
            }
        },
    },
});

export const { addToCart, removeFromCart, setQuantity } = cartReducer.actions;
export default cartReducer.reducer;