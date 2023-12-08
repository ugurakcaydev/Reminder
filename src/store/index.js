import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/count";
import appearance from "./appearance";
import currentUser from "./currentUser";

const store = configureStore({
  reducer: {
    appearance,
    counter: counterReducer,
    currentUser,
  },
});
export default store;
