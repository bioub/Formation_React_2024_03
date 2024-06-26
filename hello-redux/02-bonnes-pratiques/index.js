import { legacy_createStore } from "redux";
import {
  addTodo,
  incrementLikes,
  updateName,
  updateNewTodo,
} from "./actions.js";
import { reducer } from "./reducers.js";
import { itemsSelector, likesSelector, nameSelector, newTodoSelector, todosCompletedSelector } from "./selectors.js";

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log("likes", likesSelector(store.getState()));
  console.log("name", nameSelector(store.getState()));
  console.log("newTodo", newTodoSelector(store.getState()));
  console.log("items", itemsSelector(store.getState()));
  console.log("todos completed", todosCompletedSelector(store.getState()));
});

store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(updateName("Toto"));

store.dispatch(updateNewTodo("ABCD"));
store.dispatch(updateNewTodo("ABCDE"));

store.dispatch(addTodo("XYZ"));
