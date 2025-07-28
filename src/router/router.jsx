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
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import WorkerHome from "../pages/Dashboard/Worker/WorkerHome/WorkerHome";
import ApprovedSubmissions from "../pages/Dashboard/Worker/ApprovedSubmissions/ApprovedSubmissions";
import TaskList from "../pages/Dashboard/Worker/TaskList/TaskList";
import TaskDetails from "../pages/Dashboard/Worker/TaskDetails/TaskDetails";
import MySubmissions from "../pages/Dashboard/Worker/MySubmissions/MySubmissions";
import WithdrawalForm from "../pages/Dashboard/Worker/WithdrawalForm/WithdrawalForm";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageWithdraws from "../pages/Dashboard/Admin/ManageWithdraws/ManageWithdraws";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageTasks from "../pages/Dashboard/Admin/ManageTasks/ManageTasks";
import WorkerRoute from "../routes/WorkerRoute";
import PrivateRoute from "../routes/PrivateRoute";
import AvailableCoin from "../pages/AvailableCoin/AvailableCoin";




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
        path: "available-coin",
        element: <AvailableCoin></AvailableCoin>
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
    element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>
      },

      // Buyer Routes
      {
        path: "buyerHome",
        element: <BuyerHome></BuyerHome> 

      },
      {
        path: "add-task",
        element:  <AddTask></AddTask> 
      },
      {
        path: "my-tasks",
        element:<MyTasks></MyTasks> ,
      },
      {
        path: "review-submissions",
        element:  <ReviewSubmission></ReviewSubmission> 
      },
      
      
      {
        path: "purchase-coin",
        element:  <PurchaseCoin></PurchaseCoin>  ,
      },
      {
        path: "checkout/:coins/:price",
        element:  <Checkout></Checkout>  ,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory> ,
      },

      // Worker Routes 

      {
        path: "workerHome",
        element: <WorkerRoute> <WorkerHome></WorkerHome> </WorkerRoute>
      },
      {
        path: "approved-submissions",
        element: <ApprovedSubmissions></ApprovedSubmissions>
      },
      {
        path: "task-list",
        element: <TaskList></TaskList>
      }, 
      {
        path: "task-details/:id",
        element: <TaskDetails></TaskDetails>
      },
      {
        path: "my-submissions",
        element: <MySubmissions></MySubmissions>
      },
      {
        path: "withdraw",
        element: <WithdrawalForm></WithdrawalForm>
      },

      // Admin Router 
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>
      },
      {
        path: "manage-withdraws",
        element: <ManageWithdraws></ManageWithdraws>
      },
      {
        path:"manage-users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "manage-tasks",
        element: <ManageTasks></ManageTasks>
      }

      

    ],
  },
]);
