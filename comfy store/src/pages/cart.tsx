import React from 'react'
import { sectionTitle, CartItemList, CartTotals } from '../components'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/cart/root-reducer'

const cart = () => {
  const numberItemsCart = useSelector((state: RootState) => state.cartreducer.numberItemsCart)
  return (
    <div>cart</div>
  )
}

export default cart