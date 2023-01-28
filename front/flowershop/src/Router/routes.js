import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Addpage from "../Pages/Addpage";
import Detailpage from "../Pages/Detailpage";
import Homepage from "../Pages/Homepage";
import Wishlistpage from "../Pages/Wishlistpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/add",
    element: <Addpage/>,
  },
  {
    path: "/detail",
    element: <Detailpage/>,
  },
  {
    path: "/wishlist",
    element: <Wishlistpage/>,
  },
  
]);

export default router