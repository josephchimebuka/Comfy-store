import CartTotal from '../components/CartTotal'
import CheckoutForm from '../components/CheckoutForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/cart/root-reducer'
import { SectionTitle } from '../components'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'



export const loader =(store: any) => async()=>{
  //when i have data check how to get state from user
const user = store.getState().userState.user
  if(!user){
    toast.warn('Login to checkout from store')
    redirect('/login')
  }
}
const checkout = () => {
 
  const cartItem =  useSelector((state:RootState) => (state.cartreducer.cartTotal))
  if(cartItem === 0){
    <SectionTitle text='There is no product in the cart'/>
  }
  return (
    <div>
      <SectionTitle text={'Place your order'}/>
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
      <CheckoutForm/>
      <CartTotal/>
      </div>
   
    </div>
  )
}

export default checkout