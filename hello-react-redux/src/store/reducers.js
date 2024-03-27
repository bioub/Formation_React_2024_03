import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  incrementLikes,
  updateNewTodo,
  updateName,
  deleteTodo,
  toggleTodosComplete,
  editTodo,
  requestTodos,
} from "./actions.js";

const initialState = {
  home: {
    name: "Romain",
    likes: 10,
  },
  todos: {
    loading: false,
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
      state.items.push(action.payload);
      state.newTodo = '';
    })
    .addCase(deleteTodo, (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload.id);
    })
    .addCase(toggleTodosComplete, (state, action) => {
      for (const todo of state.items) {
        todo.completed = action.payload
      }
      // return state.items.map((todo) =>
      //   todo.completed === action.payload
      //     ? todo
      //     : { ...todo, completed: action.payload }
      // );
    })
    .addCase(editTodo, (state, action) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    })
    .addCase(requestTodos.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(requestTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
});
