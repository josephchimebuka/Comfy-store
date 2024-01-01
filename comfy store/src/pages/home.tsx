import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

const home = () => {
  return (
    <>
    <Header/> 
    <Navbar/>
    <section className='align-element'>

    <Outlet />
    </section>
  
  </>

  )
}

export default home