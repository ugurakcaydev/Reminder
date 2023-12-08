import { createSlice } from "@reduxjs/toolkit";

const initialValue = JSON.parse(localStorage.getItem("currentUser")) ?? {
  usermail: null,
  userpassword: null,
  usertoken: null,
};

const initialState = {
  currentUser: initialValue,
};

export const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    _setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { _setUser } = currentUser.actions;
export default currentUser.reducer;
