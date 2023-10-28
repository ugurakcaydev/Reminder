import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //DEFAULT
    backgroundColor: {
        name: "dark",
        primary: "red",
        secondary: "#16181c",
        third: "#212327",
        modal: "#5b708366",
    },
    color: {
        primary: "red",
        secondary: "#8ecdf8",
        base: "#e7e9ea",
        baseSecondary: "#71767b",
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
