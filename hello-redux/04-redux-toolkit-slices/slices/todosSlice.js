import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  newTodo: "ABC",
  items: [
    { id: 123, title: "ABC", completed: false },
    { id: 456, title: "DEF", completed: true },
    { id: 789, title: "XYZ", completed: false },
  ],
};

export const addTodo = createAction("todos/addTodo", (title) => {
  return {
    payload: { id: Math.random(), title: title, completed: false },
  };
});

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    updateNewTodo(state, action) {
      state.newTodo = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
    });
  },
  selectors: {
    newTodoSelector(state) {
      return state.newTodo;
    },
    itemsSelector(state) {
      return state.items;
    },
    todosCompletedSelector(state) {
      return state.items.filter((item) => item.completed);
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const { updateNewTodo } = todosSlice.actions;
export const { itemsSelector, newTodoSelector, todosCompletedSelector } =
  todosSlice.selectors;
