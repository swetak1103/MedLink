import React, { lazy, Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HospitalPage from "./components/HospitalPage";
import { Toaster } from 'react-hot-toast'
import AppoitmentTable from "./components/AppoitmentTable";
const Home = lazy(() => import("./components/Home"));
const BedsAvailability = lazy(() => import("./components/BedsAvailability"));
const Appointments = lazy(() => import("./components/Appointments"));
const Contact = lazy(() => import("./components/Contact"));
const ErrorElement = lazy(() => import("./components/ErrorElement"));
const Login = lazy(() => import("./components/Login"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Signup= lazy(()=>import("./components/Signup"));

const AppLayout = () => {
  return (
<>
      <Header />
      <Outlet />
      <Footer />
      <Toaster/>
      </>
  );
};

const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Loader />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/patient",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AppoitmentTable />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/appointments",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Appointments />
          </Suspense>
        ),
      },
      {
        path: "/hospital",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BedsAvailability />
          </Suspense>
        ),
      },
      {
        path: "/hospital/beds/:location",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HospitalPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
