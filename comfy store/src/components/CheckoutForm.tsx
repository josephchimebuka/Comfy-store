import React from 'react'
import { Form } from 'react-router-dom'
import { FormInput,SubmitBtn } from '.'
import store from '../store'



export const action =()=>async({request}:{request: any})=>{
 const formData = await request.formData()
 const user = store.getState()

 const info = {
  name,
  address,
  chargeTotal: orderTotal,
  orderTotal: formatPrice(orderTotal),
  cartItems,
  numItemsInCart,
};
try {
  const response = await customFetch.post(
    '/orders',
    { data: info },
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  store.dispatch(clearCart());
  toast.success('order placed successfully');
  return redirect('/orders');
} catch (error) {
  console.log(error);
  const errorMessage =
    error?.response?.data?.error?.message ||
    'there was an error placing your order';

  toast.error(errorMessage);
  return null;
}
}
const checkoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
    <h4 className='font-medium text-xl'>Shipping Information</h4>
    <FormInput label='first name' name='name' type='text' size={''} defaultValue={''} />
    <FormInput label='address' name='address' type='text' size={''} defaultValue={''} />
    <div className='mt-4'>
      <SubmitBtn text='Place Your Order' />
    </div>
  </Form>
  )
}

export default checkoutForm