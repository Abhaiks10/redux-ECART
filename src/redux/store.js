import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slices/wishlist'
import cartSlice from './slices/cartSlice'
const store = configureStore({
    reducer:{
        wishlistReducer : wishlistSlice,
        cartReducer : cartSlice

    }
})
export default store