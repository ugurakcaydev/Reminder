import { configureStore } from "@reduxjs/toolkit";
import appearance from "./appearance";
import currentUser from "./currentUser";
import modal from "./modal"

const store = configureStore({
  reducer: {
    appearance,
    currentUser,
    modal,
  },
});
export default store;
