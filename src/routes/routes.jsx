import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import LoginLayout from "../Layouts/LoginLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:
            [
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/blogs",
                    element:<Blog></Blog>
                }
            ]
    },
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
            path:"login",
            element:<Login></Login>
            },
        {
            path:"/register",
            element:<Register></Register>
        }]
    }
])

export default router