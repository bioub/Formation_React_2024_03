import { createAction } from "@reduxjs/toolkit";
import {
  ADD_TODO,
  INCREMENT_LIKES,
  UPDATE_NAME,
  UPDATE_NEW_TODO,
} from "./constants.js";

// export function incrementLikes() {
//     return { type: INCREMENT_LIKES }
// }

export const incrementLikes = createAction("INCREMENT_LIKES");
export const updateName = createAction("UPDATE_NAME");

export function updateNewTodo(value) {
  return { type: UPDATE_NEW_TODO, payload: value };
}

export const addTodo = createAction("ADD_TODO", (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});
