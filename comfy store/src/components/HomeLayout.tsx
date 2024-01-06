import { useNavigation,Outlet } from "react-router-dom"
import { Navbar } from "."
import HeaderComponent from "./HeaderComponent"
import Loading from "./Loading"
const HomeLayout = () => {
    const navigate = useNavigation()
    const isLoading = navigate.state === 'loading'
  return (
    <>
    <HeaderComponent/>
    <Navbar/>
    {
        isLoading ? ( <Loading/>):(
            <section>
                <Outlet/>
            </section>
        )
       
    }
    </>
  )
}

export default HomeLayout