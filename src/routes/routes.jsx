import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import LoginLayout from "../Layouts/LoginLayout";
import Recipes from "../Pages/Home/Chefs/Recipies/Recipes";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import Loader from "../Pages/Shared/Loader/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
            [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader:()=>fetch("https://assignment-10-chef-server-istiaq-tanim.vercel.app/chefs")
                },
                {
                    path: "/blogs",
                    element: <Blog></Blog>
                },
                {
                    path:"/:id",
                    element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
                    loader:({params})=>fetch(`https://assignment-10-chef-server-istiaq-tanim.vercel.app/chefs/${params.id}`)
                },
                { path:"*" ,element:<ErrorElement></ErrorElement>}
               
            ]
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: 
        [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            { path:"*" ,element:<ErrorElement></ErrorElement>}
        ]
    }
])

export default router