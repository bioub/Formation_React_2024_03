import { legacy_createStore } from "redux";

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      return {
        ...state,
        home: {
          ...state.home,
          likes: state.home.likes + 1,
        },
      };
    case "UPDATE_NAME":
      return {
        ...state,
        home: {
          ...state.home,
          name: action.newName,
        },
      };
    case "UPDATE_NEW_TODO":
      return {
        ...state,
        todos: {
          ...state.todos,
          newTodo: action.payload,
        },
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: {
          ...state.todos,
          items: [...state.todos.items, action.payload],
        },
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch({ type: "INCREMENT_LIKES" });
store.dispatch({ type: "INCREMENT_LIKES" });
store.dispatch({ type: "INCREMENT_LIKES" });
store.dispatch({ type: "UPDATE_NAME", newName: "Toto" });

store.dispatch({ type: "UPDATE_NEW_TODO", payload: "ABCD" });
store.dispatch({ type: "UPDATE_NEW_TODO", payload: "ABCDE" });

store.dispatch({
  type: "ADD_TODO",
  payload: { id: Math.random(), title: "XYZ", completed: false },
});
