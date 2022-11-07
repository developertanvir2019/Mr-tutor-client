import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Common/Error";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

        ]
    }

])