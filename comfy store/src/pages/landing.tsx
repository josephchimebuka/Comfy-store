import { FeaturedProducts, Hero } from '../components'
import { fetchURL } from '../utils'

const productsURL = '/products?featured=true'
export const loader = async()=>{
  const response = await fetchURL(productsURL)
  console.log(response)
  const products = response.data.data
  return {products}
}
const landing = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default landing