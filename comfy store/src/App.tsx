import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home, About, Cart, Landing, SingleProduct, Products, Error, Login, Register, Checkout, Orders} from './pages/index'
import ErrorElement from './components/ErrorElement'
// loaders
import {loader as landingloader} from './pages/landing'
import {loader as singleProductsLoader} from './pages/singleProducts'
import {loader as productsLoader} from './pages/products'
// actions
import {action as registerAction} from './pages/register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <Error status={0}/>,
      children:[
        {
          index:true,
          element: <Landing/>,
          loader: landingloader,
          errorElement: <ErrorElement/>
        },
        {
          path: 'products',
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          loader: singleProductsLoader
        },
        {
          path: 'cart',
          element: <Cart />, 
        },
        { path: 'about', element: <About /> },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'order',
          element: <Orders />,
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>,
      errorElement:<Error status={0}/>
    },
    {
      path: '/register',
      element: <Register/>,
      errorElement: <Error status={0}/>,
      action: registerAction
    }
  ])
  return (
  <RouterProvider router={router}/>
  )
}

export default App
