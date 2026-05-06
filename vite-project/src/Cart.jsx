import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart=()=>{
    // 
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>
            <div className="flex justify-center items-center min-h-screen w-full">
                <div className="max-w-xl w-full bg-gray-100 p-6 rounded-lg shadow-md">
                    <button className="mb-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                    {cartItems.length===0&&<h1>Your Cart is empty, Add Items to the cart</h1>}
                    <ItemList items={cartItems} />
                </div>
            </div>
        </div>
    )
};

export default Cart;