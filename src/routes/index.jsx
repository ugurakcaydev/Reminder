import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts";
import Register from "../pages/Register";
import DashboradLayout from "../layouts/dashboard";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import LoginPage from "../pages/LoginPage";
import Comments from "../pages/CommentsPage";
import SurveyPage from "../pages/SurveyPage";
import BookingPage from "../pages/BookingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboradLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "booking", // Buradaki "booking" yolunu "/dashboard/booking" yerine "booking" olarak bırakın
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/dashboard/:meetingID",
    element: <SurveyPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default routes;
