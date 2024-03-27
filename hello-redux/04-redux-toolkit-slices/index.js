import { configureStore } from "@reduxjs/toolkit";
import { homeReducer, incrementLikes, likesSelector, nameSelector, updateName } from "./slices/homeSlice.js";
import { addTodo, itemsSelector, newTodoSelector, todosCompletedSelector, todosReducer, updateNewTodo } from "./slices/todosSlice.js";

const store = configureStore({
  reducer: {
    home: homeReducer,
    todos: todosReducer,
  }
});

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
