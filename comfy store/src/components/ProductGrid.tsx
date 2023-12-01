import React from 'react'
import { Link, useLoaderData} from 'react-router-dom'

interface Products{
    title: string;
    price: string
}
const ProductGrid: React.FC<Products> = () => {
    const {products}= useLoaderData();
  return (
    <div>
        {
            products.map((product)=>{
                const {title, image, price} = product.attribute
                const dollarsAmount = price
                return(
                    <Link key={product.id}
                    to={`products/${product.id}`}>
                        <figure>
                        <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollarsAmount}</span>
            </div>

                        </figure>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ProductGrid