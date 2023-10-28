import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
export default routes;
