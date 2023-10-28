import ReactDOM from "react-dom/client";
import { store } from "./store";
import routes from "./routes";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
