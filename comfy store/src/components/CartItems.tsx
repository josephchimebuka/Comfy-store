import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../features/cart/root-reducer"
import { editCartItems, removeCartItems } from "../../features/cart/cartSlice"
import { formatPrice } from "../utils"




const CartItems = ({cartItem}:any) => {


const dispatch = useDispatch()
const removeItemFromCart = () => {
  dispatch(removeCartItems({ product }));
};



const handleAmount=(cartID:string, amount: string)=>{
  dispatch(editCartItems({cartID, amount: parseInt(amount)}))
}

  const {cartID, title, price, image, amount, company, productColor} = cartItem
  return (
   <article
   className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"

   >
  <img 
  src={image} 
  alt={title} />
    {/* Text div */}
    <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COMPANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>
          {company}
        </h4>
        {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={(e)=>handleAmount('',e.target.value)}
          >
            {(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className='mt-2 link link-primary link-hover text-sm'
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      <div>
        
      </div>
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
   </article>
  )
}

export default CartItems