import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodos } from "../api";

export const incrementLikes = createAction("INCREMENT_LIKES");
export const updateName = createAction("UPDATE_NAME");

export const updateNewTodo = createAction("UPDATE_NEW_TODO");

export const addTodo = createAction("ADD_TODO", (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});


export const toggleTodosComplete = createAction("TOGGLE_TODOS_COMPLETE");
export const editTodo = createAction("EDIT_TODO");
export const deleteTodo = createAction("DELETE_TODO");

export const requestTodos = createAsyncThunk('REQUEST_TODOS', () => {
  return fetchTodos();
});
