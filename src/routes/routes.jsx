import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blogs/Blog";

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
    }
])

export default router