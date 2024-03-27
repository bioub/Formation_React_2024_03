import { createReducer } from "@reduxjs/toolkit";
import { addTodo, incrementLikes, updateNewTodo, updateName } from "./actions.js";

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

export const homeReducer = createReducer(initialState.home, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      state.likes++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(updateNewTodo, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload)
    });
});