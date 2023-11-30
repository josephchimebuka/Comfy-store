import { NavLink } from 'react-router-dom'

const links = [
    {id:1, title: 'home', url: '/'},
    {id:1, title: 'about', url: 'about'},
    {id:1, title: 'products', url: 'products'},
    {id:1, title: 'cart', url: 'cart'},
    {id:1, title: 'checkout', url: 'checkout'},
    {id:1, title: 'order', url: 'order'}
]
const navlink = () => {
  return (
    <div className='flex gap-4'>
        {
        links.map((link)=>{
            const {id, title, url} = link
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