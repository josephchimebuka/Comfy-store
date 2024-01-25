
import Filter from '../components/Filter'
import ProductsContainer from '../components/ProductsContainer'
import PaginationContainer from '../components/PaginationContainer'
import { fetchURL } from '../utils'


// I stil need to add the request type
const url = '/products'
export const loader = async({request}:{request:any})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  console.log(params)
  console.log(request)
    const response = await fetchURL(url,{
      params
    })
    const products = response.data.data
    const meta = response.data.meta 
    console.log(response)
    return{products,meta,params}
  
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