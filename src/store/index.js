import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/count";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
