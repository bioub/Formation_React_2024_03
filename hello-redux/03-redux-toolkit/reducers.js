import { createReducer } from "@reduxjs/toolkit";
import { incrementLikes, updateName } from "./actions.js";
import {
  ADD_TODO,
  INCREMENT_LIKES,
  UPDATE_NAME,
  UPDATE_NEW_TODO,
} from "./constants.js";

const initialState = {
  home: {
    name: "Romain",
    likes: 10,
  },
  todos: {
    newTodo: "ABC",
    items: [
      { id: 123, title: "ABC", completed: false },
      { id: 456, title: "DEF", completed: true },
      { id: 789, title: "XYZ", completed: false },
    ],
  },
};

// export function homeReducer(state = initialState.home, action) {
//   switch (action.type) {
//     case incrementLikes.type:
//       return {
//         ...state,
//         likes: state.likes + 1,
//       };
//     case UPDATE_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// }

export const homeReducer = createReducer(initialState.home, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      state.likes++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});

export function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case UPDATE_NEW_TODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
