import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Toplantı Adı",
  hour: 1,
  minutes: 0,
  invitedPeople: [],
  meetingDetailDtos: [],
};

export const currentBookData = createSlice({
  name: "bookData",
  initialState,
  reducers: {
    _setBookData: (state, action) => {
      return { ...state, ...action.payload };
    },
    
  },
});

export const { _setBookData } = currentBookData.actions;
export default currentBookData.reducer;
