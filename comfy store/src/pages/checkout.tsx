import React from 'react'
import CartTotal from '../components/CartTotal'
import CheckoutForm from '../components/CheckoutForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/cart/root-reducer'
import { SectionTitle } from '../components'
const checkout = () => {
  const cartItem =  useSelector((state:RootState) => (state.cartreducer.cartTotal))
  if(cartItem === 0){
    <SectionTitle text='There is no product in the cart'/>
  }
  return (
    <div>
      <SectionTitle text={'Place your order'}/>
      <CheckoutForm/>
      <CartTotal/>
    </div>
  )
}

export default checkout