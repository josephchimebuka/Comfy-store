import React, { useState } from 'react'
import { fetchURL,formatPrice } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'

interface ProductAttributes {
  image: string;
  title: string;
  price: number;
  description: string;
  colors: string[];
  company: string;
}

interface Product {
  attributes: ProductAttributes;
}

interface ProductsData {
  product: Product;
}

interface LoaderParams {
  id: string;
}

interface Price{
  
}
export const loader = async ({ params }: { params: LoaderParams }) => {
  try {
    const response = await fetchURL(`/products/${params.id}`);
    const product: Product = response.data.data;

    return { product };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// type ProductsData={
//   products: Products[]
// }
const singleProducts = () => {
  const {product} = useLoaderData() as ProductsData
  const {title, image, price, description,company,colors} = product.attributes
  const dollarsAmount = formatPrice(price)
  const [productColor, setproductColor] = useState(colors[0])
  const [amount, setAmount] = useState('')
  

  // const handleAmount=(e)=>{
  //     setAmount(parseInt(e.target.value))
  // }

  return (
    <section>
      <div className='text-md breadcrumbs mt-12'>
        <ul>
    <li>
    <Link to={'/'}>
      Home
    </Link>
      </li>

    <li>
    <Link to={'/products'}>
      Products
    </Link>
      </li>
        </ul>
        <div className='mt-8 grid lg:grid-cols-2  gap-x-6'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full  '
        />
        
        <div>
        <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>

          <p className='mt-3 text-xl'>{dollarsAmount}</p>

          <p className='mt-6 leading-8'>{description}</p>
          <div className='mt-4'>
            <h1>Colors</h1>
              {
                colors.map((color)=>{
               return(
                <button
                 key={color}
                 className={`badge  w-6 h-6 mr-2  ${
                  color === productColor && 'border-2 border-secondary'
                }`}
                onClick={()=>setproductColor(color)}
                  style={{backgroundColor: `${color}`, width:'30px', height:'30px', borderRadius: '50px', marginRight: '5px'}}
                  ></button>
               )
                })
              }
          </div>
          <div>
            //if the amount s not setting then it could propbably be because of the 
            <label className='label'>Amount</label>
            <select
              className='select select-secondary select-bordered w-full select-md'
              value={amount}
              onChange={(e)=> setAmount(e.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          </div>
          
          </div>
      </div>
    </section>
  )
}

export default singleProducts