import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/cart/userSlice'
import { clearCart } from '../../features/cart/cartSlice'
import { RootState } from '../../features/cart/root-reducer'


const HeaderComponent = () => {
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state:RootState)=> state.userreducer.user)
  const handleLogout=()=>{
    navigate('/')
    dispatch(logoutUser)
    dispatch(clearCart)
}
  return (
    <div className='bg-neutral py-3 text-neutral-content'>
             <div className='align-element flex justify-center sm:justify-end '>
             <div className='align-element flex justify-center sm:justify-end '>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-xs btn-outline btn-primary '
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link to='/login' className='link link-hover text-xs sm:text-sm'>
              Sign in / Guest
            </Link>
            <Link to='/register' className='link link-hover text-xs sm:text-sm'>
              Create an Account
            </Link>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default HeaderComponent 