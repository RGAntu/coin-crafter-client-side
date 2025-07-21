import { createBrowserRouter } from "react-router";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        
    ]
  },
]);