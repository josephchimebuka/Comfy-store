import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../features/cart/root-reducer'

const links = [
    {id:1, title: 'home', url: '/'},
    {id:2, title: 'about', url: 'about'},
    {id:3, title: 'products', url: 'products'},
    {id:4, title: 'cart', url: 'cart'},
    {id:5, title: 'checkout', url: 'checkout'},
    {id:6, title: 'order', url: 'order'}
]
const navlink = () => {
    const user = useSelector((state:RootState)=>(state.userreducer.user))
  return (

    
    <div className='flex gap-4'>
        {
        links.map((link)=>{
            const {id, title, url} = link
            if((url === 'checkout'  || url === 'order') && !user)  return null
            return(
                <li key={id}>
                    <NavLink className='uppercase' to={url}>{title}</NavLink>
                </li>
            )
        })
        }
    </div>
  )
}

export default navlink