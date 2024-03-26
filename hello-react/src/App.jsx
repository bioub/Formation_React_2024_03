import "./App.css";
import Hello from "./Hello";
import Home from "./Home";
import Layout from "./Layout";
import Todos from "./Todos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
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
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
