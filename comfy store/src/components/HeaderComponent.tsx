import React from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <div className='bg-neutral py-3 text-neutral-content'>
             <div className='align-element flex justify-center sm:justify-end '>
        {/* USER */}
        {/* LINKS */}
        <div className='flex gap-x-6 justify-center items-center'>
          <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
          <Link to='/register' className='link link-hover text-xs sm:text-sm'>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent 