import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import AllDonations from "@/pages/AllDonations/AllDonations";
import ViewDetails from "@/pages/ViewDetails/ViewDetails";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardHome from "@/pages/Dashboard/DashboardHome/DashboardHome";
import DashboardAllDonation from "@/pages/Dashboard/DashboardAllDonation/DashboardAllDonation";
import DashboardCreateDonation from "@/pages/Dashboard/DashboardCreateDonation/DashboardCreateDonation";
import DashboardUpdateDonation from "@/pages/Dashboard/DashboardUpdateDonation/DashboardUpdateDonation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "donations",
        element: <AllDonations />,
      },
      {
        path: "donations/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(
            `https://disaster-relief-server-navy.vercel.app/donations/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "donations",
        element: <DashboardAllDonation />,
      },
      {
        path: "create-donation",
        element: <DashboardCreateDonation />,
      },
      {
        path: "update/:id",
        element: <DashboardUpdateDonation />,
        loader: ({ params }) =>
          fetch(
            `https://disaster-relief-server-navy.vercel.app/donations/${params.id}`
          ),
      },
    ],
  },
]);
