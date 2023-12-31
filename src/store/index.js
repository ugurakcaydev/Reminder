import { configureStore } from "@reduxjs/toolkit";
import appearance from "./appearance";
import currentUser from "./currentUser";
import bookData from "./bookData"
import modal from "./modal"

const store = configureStore({
  reducer: {
    appearance,
    currentUser,
    bookData,
    modal,
  },
});
export default store;
