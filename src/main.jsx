import ReactDOM from "react-dom/client";
import store from "./store";
import routes from "./routes";
import "./assets/css/tailwind.css";
import "./assets/css/odometer-theme-default.css"
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);



