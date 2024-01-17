import React from 'react'
import { SectionTitle, CartItemList, CartTotals } from '../components'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/cart/root-reducer'
import { Link } from 'react-router-dom'

const Cart = () => {
  const user = null
  const numberItemsCart = useSelector((state: RootState) => state.cartreducer.numberItemsCart)
  if(numberItemsCart === 0){
    return <SectionTitle text='Cart is empty'/>
  }
  return (
    <>
    <SectionTitle text={'Shopping Cart'}/>
    <div className='mt-8 grid gap-8  lg:grid-cols-12'>
    <div className='lg:col-span-8'>
          <CartItemList />
            </div>
          <div className='lg:col-span-4 lg:pl-4'>
            <CartTotals/>
            { user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
            Proceed to checkout
          </Link>
            ):( <Link to='/login' className='btn btn-primary btn-block mt-8'>
            please login
          </Link>)}
          </div>
    </div>
    </>
  
  )
}

export default Cart