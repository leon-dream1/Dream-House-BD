import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <div>Hello Root!</div>,
      },
      {
        path: "/about",
        element: <div>Hello About!</div>,
      },
    ],
  },
]);
