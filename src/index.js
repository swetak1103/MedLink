import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home"
import BedsAvailability from "./components/BedsAvailability";
import Footer from "./components/Footer";
import Appointments from "./components/Appointments";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/beds/:hospid",
        element:<AboutUs/>,
      },
      {
        path:"/appointments",
        element:<Appointments />,
      },
      {
        path:"/beds",
        element:<BedsAvailability />,
      },
      {
        path:"/login",
        element:<Login />
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
