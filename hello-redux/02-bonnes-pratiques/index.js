import { legacy_createStore } from "redux";
import { incrementLikes, updateName } from "./actions.js";
import { reducer } from "./reducers.js";
import { likesSelector, nameSelector } from "./selectors.js";



const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log("likes", likesSelector(store.getState()));
  console.log("name", nameSelector(store.getState()));
});

store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(incrementLikes());
store.dispatch(updateName('Toto'));

store.dispatch({ type: "UPDATE_NEW_TODO", payload: "ABCD" });
store.dispatch({ type: "UPDATE_NEW_TODO", payload: "ABCDE" });

store.dispatch({
  type: "ADD_TODO",
  payload: { id: Math.random(), title: "XYZ", completed: false },
});
