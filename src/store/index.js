import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/count";
import appearance from "./appearance";

 const store = configureStore({
  reducer: {
    appearance,
    counter: counterReducer,
  },
});
export default store
