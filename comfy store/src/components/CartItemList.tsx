import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import { RootState } from '../../features/cart/root-reducer'

const CartItemList = () => {
  const cartItem =  useSelector((state: RootState) =>( state.cartreducer.cartItem))
  return (
    <div>
      {
        cartItem.map((item)=>{
         return <CartItems key={item.cartID} cartItem={item}/>
})
      }
    </div>
  )
}

export default CartItemList