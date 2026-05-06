import { createSlice } from "@reduxjs/toolkit";

// Slice is basically a way in which we organize redux state and logic in one place
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // Mutating the state over here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;