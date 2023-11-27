import React from 'react'
import { Outlet } from 'react-router-dom'

const home = () => {
  return (
    <>
    <nav>
      <p className='text-5xl text-primary'>Comfort</p>
    </nav>
    <Outlet />
  </>

  )
}

export default home