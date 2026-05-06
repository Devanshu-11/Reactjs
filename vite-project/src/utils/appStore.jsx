import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.jsx';

// It is used to create the Redux store and inside it,we will add slices to it
const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;