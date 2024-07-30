import { Route, Routes } from "react-router-dom"
import { HomePage, ProductDetail } from "../pages"
import { ProductsList } from "../pages"
import { Login } from "../pages"
import { Register } from "../pages"
import { CartPage } from "../pages/Cart/CartPage"
import { Protectedroutes } from "./Protectedroutes"
import { OrderPage } from "../pages/Order/OrderPage"
import { DashboardPage } from "../pages"




export const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<ProductsList />} />
            <Route path="/Products/:id" element={<ProductDetail />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Protectedroutes> <CartPage /> </Protectedroutes>} />
            <Route path="/OrderPage" element={<OrderPage />} />
            <Route path="/DashboardPage" element={<DashboardPage />} />

        </Routes>
        
    )
}


