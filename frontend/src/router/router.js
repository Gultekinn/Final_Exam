import Add from "../pages/Add/Add";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Wishlist from "../pages/Wishlist/Wishlist";
import SiteRoot from "../SiteRoot/SiteRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
