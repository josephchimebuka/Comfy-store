import React from 'react'
import { fetchURL } from '../utils'


export const loader=async({params})=>{
  const response = await fetchURL(`/products/${params}`)
  const {products} = response.data.data
return null
}
const singleProducts = () => {
  return (
    <div>singleProducts</div>
  )
}

export default singleProducts