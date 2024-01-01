
import Filter from '../components/Filter'
import ProductsContainer from '../components/ProductsContainer'
import PaginationContainer from '../components/PaginationContainer'
import { fetchURL } from '../utils'



const url = '/products'
export const loader = async()=>{
    const response = await fetchURL(url)
    const products = response.data.data
    console.log(response)
    return{products}
  
}
const products = () => {
  return (
    <>
    <Filter/>
    <ProductsContainer/>
    <PaginationContainer/>
    </>
  )
}

export default products