import { createBrowserRouter} from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Allusers from "../pages/Allusers";
import Allproducts from "../pages/Allproducts";
import CategoryProduct from "../pages/CategoryProduct";
import Productdetails from "../pages/Productdetails";
import Viewcart from "../pages/Viewcart";
import Search from "../pages/Search";
import Enquerycart from "../pages/Enquerycart";
import Enqueryfrom from "../Components/Enqueryfrom";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/product",
                element:<Product/>
            },
            {
                path:"/service",
                element:<Services/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/forgot-password",
                element:<ForgotPassword/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/product-category/:categoryName",
                element:<CategoryProduct/>
            },
            {
                path:"/search-product",
                element:<Search/>
            },
            {
                path:'/product/:id',
                element:<Productdetails/>
            },
            {
                path:"/view-cart",
                element:<Viewcart/>
            },
            {
                path:"/profile",
                element:<Profile/>,
                children:[
                    {
                        path:'all-users',
                        element:<Allusers/>
                    },
                    {
                        path:'all-products',
                        element:<Allproducts/>
                    }
                ]
            },
            {
                path:"/Enquery-cart",
                element:<Enquerycart/>
            
            }
                
        
   
        ]
    }
])


export default router