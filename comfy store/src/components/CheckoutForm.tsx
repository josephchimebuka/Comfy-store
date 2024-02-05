import React from 'react'
import { Form } from 'react-router-dom'
import { FormInput,SubmitBtn } from '.'
import store from '../store'



export const action =()=>async({request}:{request: any})=>{
 const formData = await request.formData()
 const user = store.getState()

// I removed the functions on the checkout form
//I didnt write much code todayjust don't want to miss any days that just want to mk
//third new changes
// I was suppode to make some changes today but im doing them late i need to take this very serious
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