import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Romain",
  likes: 10,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    incrementLikes(state, action) {
      state.likes++;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  selectors: {
    nameSelector(state) {
      return state.name;
    },
    likesSelector(state) {
      return state.likes;
    },
  },
});

export const homeReducer = homeSlice.reducer;
export const { incrementLikes, updateName } = homeSlice.actions;
export const { nameSelector, likesSelector } = homeSlice.selectors;
