import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom';
import { fetchURL } from '../utils';
import { loginUser } from '../../features/cart/userSlice';
import { toast } from 'react-toastify';


export const action =(store:any)=>async({request}:{request: any})=>{
//  console.log(store)

const formData = await request.formData
const data = Object.fromEntries(formData)

try {
  const response = fetchURL.post('/auth/local', data)
      store.dispatch(loginUser((await response).data))
      toast.success('Logged in successful')
      redirect('/')

} catch (error) {
  console.log(error);
  // const errorMessage =
  //   error?.response?.data?.error?.message ||
  //   'please double check your credentials';

  // toast.error(errorMessage);
  return null;
}
}
const login = () => {
  //login page where the user logs into the the site
  return (
    <div>
      <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
            type='email'
            label='email'
            name='identifier'
            defaultValue='test@test.com' size={''}        />
        <FormInput
            type='password'
            label='password'
            name='password'
            defaultValue='secret' size={''}        />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button type='button' className='btn btn-secondary btn-block'>
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
        <div>
          I didnt wrute code in this page tody but i did in another
        </div>
        <div>
          should finisht his rojects by today and send out by tomorrow and also be more serious
        </div>
      </Form>
      </section>
    </div>
  )
}

export default login