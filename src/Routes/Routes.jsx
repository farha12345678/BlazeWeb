import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import LogIn from "../Components/Pages/LogIn";
import Register from "../Components/Pages/Register";
import Update from "../Components/Pages/Update";
import AddBlog from "../Components/Pages/AddBlog";
import AllBlogs from "../Components/Pages/AllBlog/AllBlogs";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Components/Blog/Details";
import ErrorPage from './../Components/Pages/ErrorPage';
import Wishlist from "../Components/Pages/WishList/Wishlist";
import FeaturedPart from "../Components/Pages/Featured/FeaturedPart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      //  errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader:fetch('http://localhost:5000/blog')
          
        },
        {
          path:"/login",
          element:<LogIn></LogIn>,
          
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes><Update></Update></PrivateRoutes>,
          loader:({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path:'/add',
          element:<PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>
        },
        {
          path: "/all",
          element: <AllBlogs></AllBlogs>,
         
         
        },
        {
          path:'/view/:id',
          element:<Details></Details>,
          loader:({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path:'/wishlist',
          element:<Wishlist></Wishlist>,
          
        },
        {
          path:"/featured",
          element:<FeaturedPart></FeaturedPart>,
          loader: () => fetch('http://localhost:5000/blog')
        }
      ]
    },
  ]);

  export default router;

