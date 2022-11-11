import { createBrowserRouter } from "react-router-dom";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Common/Error";
import EditProduct from "../Pages/EditProduct";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/LoginReg/Login";
import Register from "../Pages/LoginReg/Register";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRouter from "./PrivateRouter";

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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <PrivateRouter><AddService></AddService></PrivateRouter>
            },
            {
                path: '/myReviews',
                element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://server11-bice.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/edit/:id',
                element: <EditProduct></EditProduct>
            },


        ]
    }

])