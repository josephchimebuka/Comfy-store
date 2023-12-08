import React from 'react'
import SectionTitle from './SectionTitle'
import ProductGrid from './ProductGrid'

const FeaturedProducts = () => {
  return (
    <div>
        <SectionTitle text='Featured products'/>
        <ProductGrid products={[]}/>
    </div>
  )
}

export default FeaturedProducts