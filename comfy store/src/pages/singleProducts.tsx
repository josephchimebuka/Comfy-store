import React from 'react'
import { fetchURL } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'

type Products={
  id: string,
  attributes:{
    title: string,
    image: string,
    price: string
  }
}
export const loader=async({params})=>{
  const response = await fetchURL(`/products/${params}`)
  const {products} = response.data.data
return {products}
}

type ProductsData={
  products: Products[]
}
const singleProducts = () => {
  const {products} = useLoaderData() as ProductsData
  const {title, image, price, description, color, company} = products.attributes
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
    <Link to={'/'}>
    <li>Home</li>
    </Link>

    <Link to={'/products'}>
    <li>Products</li>
    </Link>
        </ul>
      </div>
    </section>
  )
}

export default singleProducts