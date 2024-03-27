import { configureStore } from "@reduxjs/toolkit";
import "./App.css";
import Hello from "./Hello";
import Home from "./Home";
import Layout from "./Layout";
import Todos from "./Todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { homeReducer, todosReducer } from "./store/reducers";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "hello/:name",
        element: <Hello />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
    ],
  },
]);

const store = configureStore({
  reducer: {
    home: homeReducer,
    todos: todosReducer,
  },
  devTools: import.meta.env.DEV === true
  // devTools: {
  //   maxAge: 5
  // }
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
