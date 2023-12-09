import { configureStore } from "@reduxjs/toolkit";
import appearance from "./appearance";
import currentUser from "./currentUser";

const store = configureStore({
  reducer: {
    appearance,
    currentUser,
  },
});
export default store;
