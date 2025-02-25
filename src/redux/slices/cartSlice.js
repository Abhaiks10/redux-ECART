import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state, action)=>{
            state.push(action.payload)
        },
        removeToCart:(state, action)=>{
            return state.filter((item)=>item.id != action.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const {addToCart,removeToCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer