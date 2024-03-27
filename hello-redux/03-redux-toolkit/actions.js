import { createAction } from "@reduxjs/toolkit";

export const incrementLikes = createAction("INCREMENT_LIKES");
export const updateName = createAction("UPDATE_NAME");

export const updateNewTodo = createAction("UPDATE_NEW_TODO");

export const addTodo = createAction("ADD_TODO", (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});
