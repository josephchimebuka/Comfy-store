import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
import {Product} from './interface'

interface CartState {
  cartItem: never[]; // Adjust this based on the actual type of your cart items
  numberItemsCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}


const defaultState: CartState = {
    cartItem: [],
    numberItemsCart :0,
    cartTotal:0,
    shipping: 500,
    tax:0,
    orderTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
      addCartItem:(state, action)=>{
          console.log(action.payload)
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