import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'

const defaultState = {
    cartItem: [],
    numberItemsCart :0,
    cartTotal:0,
    shipping: 500,
    tax:0,
    orderTotal: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: defaultState,
    reducers: {
        addCartItem:(action, state)=>{
                console.log(action)
        },

        removeCartItems:(action, state)=>{
            console.log(state)
        },

        clearCart:(state)=>{

        },
        editCartItems:(action, state)=>{

        }
    }
})

export const {addCartItem,removeCartItems, clearCart, editCartItems} = cartSlice.actions;

export default cartSlice.reducer