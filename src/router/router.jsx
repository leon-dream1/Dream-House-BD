import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <div className="text-5xl font-merriweather font-bold">Hello Root!</div>,
      },
      {
        path: "/about",
        element: <div>Hello About!</div>,
      },
    ],
  },
]);
