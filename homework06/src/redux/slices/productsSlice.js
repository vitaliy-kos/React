import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => { 
            const newProduct = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                availability: action.payload.availability
            }
            state.list.push(newProduct);
        },
        removeProduct: (state, action) => { 
            state.list = state.list.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const product = state.list.filter(product => product.id == action.payload.id).pop(); 
            product.name = action.payload.name;
            product.description = action.payload.description;
            product.price = action.payload.price;
            product.availability = action.payload.availability;
        }
    }
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;