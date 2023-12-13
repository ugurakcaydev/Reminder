import { createSlice } from "@reduxjs/toolkit";

const initialColor = JSON.parse(localStorage.getItem("color")) ?? {
  base: "#333333", // Koyu gri-siyah tonu
  baseSecondary: "#666666", // Orta gri tonu
  secondary: "#999999",
  primary: "#F7B22C",
  //#252525
};

const initialBackgroundColor = JSON.parse(
  localStorage.getItem("backgroundColor")
) ?? {
  base: "#ffffff", // Saf beyaz
  baseSecondary: "#f0f0f0", // Hafif gri tonu
  secondary: "#dcdcdc",
  modal: "#1f2528cc",
};

const initialState = {
  color: initialColor,
  backgroundColor: initialBackgroundColor,
};

const appearance = createSlice({
  name: "appearance",
  initialState,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      localStorage.setItem("backgroundColor", JSON.stringify(action.payload));
    },
    _setColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem("color", JSON.stringify(action.payload));
    },
  },
});

export const { _setBackgroundColor, _setColor } = appearance.actions;
export default appearance.reducer;
