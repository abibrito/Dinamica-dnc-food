import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.scss";
import { MOCK_FOOD } from "../src/Mock/Food.mock";
import Product from "./Pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={MOCK_FOOD} />,
  },
  {
    path: "/",
    element: <Product data={MOCK_FOOD} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
