import { createBrowserRouter } from "react-router";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";



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
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
      

    ]
    
  },
  {
    path:"/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path:"home"
      }
    ]
  }
]);