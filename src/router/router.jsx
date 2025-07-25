import { createBrowserRouter } from "react-router";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Authentication/Register/Register";
import Login from "../pages/Authentication/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import AddTask from "../pages/Dashboard/Buyer/AddTask/AddTask";
import PurchaseCoin from "../pages/Dashboard/Buyer/PurchaseCoin/PurchaseCoin";
import Checkout from "../pages/Dashboard/Buyer/Checkout/Checkout";
import MyTasks from "../pages/Dashboard/Buyer/MyTask/MyTask";
import Forbidden from "../pages/Forbidden/Forbiden";
import PaymentHistory from "../pages/Dashboard/Buyer/PaymentHistory/PaymentHistory";
import BuyerHome from "../pages/Dashboard/Buyer/BuyerHome/BuyerHome";
import ReviewSubmission from "../pages/Dashboard/Buyer/ReviewSubmission/ReviewSubmission";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout></BasicLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "forbidden",
        element: <Forbidden></Forbidden>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <BuyerHome></BuyerHome>
      },
      {
        path: "buyerHome",
        element: <BuyerHome></BuyerHome>

      },
      {
        path: "add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "my-tasks",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "review-submissions",
        element: <ReviewSubmission></ReviewSubmission>
      },
      {
        path: "purchase-coin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "checkout/:coins/:price",
        element: <Checkout></Checkout>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
