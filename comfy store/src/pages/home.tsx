import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const home = () => {
  return (
    <>
    <Header/>
    <section className='align-element'>
    <nav>
      <p className='text-5xl text-primary'>Comfort</p>
    </nav>
    <Outlet />
    </section>
  
  </>

  )
}

export default home