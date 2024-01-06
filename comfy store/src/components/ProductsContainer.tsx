import { useState } from "react"
import ProductGrid from "./ProductGrid"
import ProductList from "./ProductList"
import { useLoaderData } from "react-router-dom"
import { BsFillGridFill, BsList } from 'react-icons/bs';

type MetaData={
    categories: string,
    companies: string,
    pagination: {
      page: number,
      pageCount: number,
      pageSize: number,
      total: number
    }
}




const ProductsContainer = () => {
  const {meta} =  useLoaderData() as {meta: MetaData}
  const [layout, setLayout] = useState('grid')
  const {total} = meta.pagination
  console.log(total)
  const setactiveStyles=(pattern:any)=>{
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? `btn-primary text-primary-content`: `btn-ghost text-base-content`}`
  }
  return (
    <div className="">
      <div className="flex items-center justify-between mt-8 border-b pb-4">
      <h4 className="font-medium text-md">
        {total} product{total >=1 && 's'}
      </h4>

      <div className="flex gap-3">
        <div onClick={()=>setLayout('grid')}
        className={setactiveStyles('grid')}>
       <BsFillGridFill/>
        </div>
          <div onClick={()=>setLayout('list')}
          className={setactiveStyles('list')}>
        <BsList/>
          </div>
      
      </div>
      </div>
    {total === 0 ? (
       <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
    )
    :layout === 'grid' ? 
    <div> <ProductGrid/></div> : <div><ProductList/></div>}
      
     
    </div>
  )
}

export default ProductsContainer