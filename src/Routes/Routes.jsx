import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookingServices from "../Pages/BookingServices/BookingServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/bookings/:id',
          element:<PrivateRoutes><BookingServices></BookingServices></PrivateRoutes>,
          loader:({params})=>fetch(`https://car-doctor-server-pearl-five.vercel.app/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);

