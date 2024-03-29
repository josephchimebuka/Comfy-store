import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Product } from './interface';

interface CartItem {
  cartID: string;
  productID: string;
  title: string;
  image: string;
  price: number;
  description: string;
  company: string;
  colors: string[];
  amount:  number;
}

interface CartState {
  cartItem: CartItem[];
  numberItemsCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

const defaultState: CartState = {
  cartItem: [],
  numberItemsCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addCartItem: (state, action: PayloadAction<{ product: CartItem }>) => {
      const { product } = action.payload;
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item.cartID === product.cartID
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update the quantity or other properties
        // For now, let's just update the amount for demonstration purposes
        state.cartItem[existingItemIndex].amount = product.amount;
      } else {
        // Item doesn't exist, add it to the cart
        state.cartItem.push(product);
      }

      // Update other properties like total, tax, etc., based on your logic
      state.numberItemsCart = state.cartItem.length;
      state.numberItemsCart += product.amount
      state.cartTotal = product.amount * product.price
      state.cartTotal = state.cartItem.reduce((total, item) => total + item.price, 0);
      // ... other updatesnumItemsInCart
      cartSlice.caseReducers.calculateTotals(state)
      console.log(state.cartItem);
      toast.success('Item added successfully to cart')
    },
    removeCartItems: (state, action: PayloadAction<{ product: CartItem }>) => {
      const { product } = action.payload;
      const removedItemIndex = state.cartItem.findIndex((item) => item.cartID === product.cartID);

      if (removedItemIndex !== -1) {
        const removedItem = state.cartItem[removedItemIndex];
        state.cartItem = state.cartItem.filter((item) => item.cartID !== product.cartID);

        state.numberItemsCart -= removedItem.amount;
        state.cartTotal -= removedItem.price * removedItem.amount;

        // Assuming you have a calculateTotals function
        // Update it accordingly based on your logic
        cartSlice.caseReducers.calculateTotals(state);

        toast.error('Item removed from cart');
      }
    },
    clearCart: (state) => {
      // Implement clearing logic if needed
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },
    editCartItems: (state, action: PayloadAction<{ cartID: string; amount: number }>) => {
      const { cartID, amount } = action.payload;
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item.cartID === cartID
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.cartItem[existingItemIndex];
        state.numberItemsCart += amount - existingItem.amount;
        state.cartTotal += existingItem.price * (amount - existingItem.amount);
        existingItem.amount = amount;
        // Assuming you have a calculateTotals function
        // Update it accordingly based on your logic
        cartSlice.caseReducers.calculateTotals(state);
        toast.success('Cart updated');
      }
    },
    calculateTotals:(state)=>{
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.tax + state.cartTotal + state.shipping
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
});
  
export const { addCartItem, removeCartItems, clearCart, editCartItems } = cartSlice.actions;

export default cartSlice.reducer;
