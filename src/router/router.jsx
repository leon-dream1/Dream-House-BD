import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
        loader: () => fetch("/public/fakeData.json"),
      },
    ],
  },
]);
