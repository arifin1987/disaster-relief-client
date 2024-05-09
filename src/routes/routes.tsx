import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import AllDonations from "@/pages/AllDonations/AllDonations";
import ViewDetails from "@/pages/ViewDetails/ViewDetails";

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
          fetch(`http://localhost:5000/donations/${params.id}`),
      },
    ],
  },
]);
