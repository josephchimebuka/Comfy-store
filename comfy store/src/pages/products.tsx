
import Filter from '../components/Filter'
import ProductsContainer from '../components/ProductsContainer'
import PaginationContainer from '../components/PaginationContainer'
import { fetchURL } from '../utils'



const url = '/products'
export const loader = async()=>{
    const response = await fetchURL(url)
    const products = response.data.data
    const meta = response.data.meta
    console.log(response)
    return{products,meta}
  
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