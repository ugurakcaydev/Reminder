import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //DEFAULT
  color: {
    base: "#333333", // Koyu gri-siyah tonu
    baseSecondary: "#666666", // Orta gri tonu
    secondary: "#999999",
    primary: "#F7B22C",
    //#252525
  },
  backgroundColor: {
    base: "#ffffff", // Saf beyaz
    baseSecondary: "#f0f0f0", // Hafif gri tonu
    secondary: "#dcdcdc", 
  },
};
const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    _setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { _setBackgroundColor, _setColor } = appearance.actions;
export default appearance.reducer;
