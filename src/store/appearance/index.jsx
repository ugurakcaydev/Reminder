import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    //DEFAULT
    backgroundColor: {
        primary: "#fff",
    },
    color: {
        primary: "#000",
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

export const { _setBackgroundColor, _setColor } =
    appearance.actions;
export default appearance.reducer;
