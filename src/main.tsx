import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import AddGoal from "./routes/AddGoal";
import Settings from "./routes/Settings";
import Reports from "./routes/Reports";
import ErrorPage from "./routes/Error";
import "./styles.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/add-goal",
        element: <AddGoal/>
    },
    {
        path: "/settings",
        element: <Settings/>
    },
    {
        path: "/reports",
        element: <Reports/>
    }
  ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);