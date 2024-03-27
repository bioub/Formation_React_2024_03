import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Clock from "./Clock";
import { useDispatch, useSelector } from "react-redux";
import { itemsSelector, loadingSelector, newTodoSelector } from "./store/selectors";
import { addTodo, deleteTodo, editTodo, requestTodos, toggleTodosComplete, updateNewTodo } from "./store/actions";


  
  // function fetchTodosOld() {
  //   return fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => data.slice(0, 20));
  // }
  
  // fetchTodos().then((todos) => {
  
  // })

function Todos() {
    // Exercice
    // en vous inspirant de Home.jsx
    // utiliser useSelector pour récupérer todos et newTodo
    // utiliser useDispatch et appeler dispatch avec les actions
    // creators :
    // au moment ou on submit le formulaire (addTodo)
    // au moment ou on saisi dans le champs du form (updateNewTodo)
    // Bonus : comment gérer la suppression ?

    const dispatch = useDispatch()
    const loading = useSelector(loadingSelector);
    const todos = useSelector(itemsSelector);
    // const [todos, setTodos] = useState([]);
    const newTodo = useSelector(newTodoSelector);
    // const [newTodo, setNewTodo] = useState("ABC");

    const [showClock, setShowClock] = useState(true);
    const [editingId, setEditingId] = useState(-1);
  
    useEffect(() => {
      dispatch(requestTodos());
    }, [dispatch]);
  
    useEffect(() => {
      function handleWindowClick(event) {
        if (!event.target.classList.contains('TodoInputValue')) {
          setEditingId(-1);
        }
      }
      window.addEventListener("click", handleWindowClick);
      return () => {
        window.removeEventListener("click", handleWindowClick);
      };
    }, []);
  
    /** @param {import('react').FormEvent<HTMLFormElement>} event  */
    function handleSubmit(event) {
      event.preventDefault();
      dispatch(addTodo(newTodo));
    }
  
    /** @param {import('react').ChangeEvent<HTMLInputElement>} event  */
    function handleToggleChange(event) {
      dispatch(toggleTodosComplete(event.target.checked));
    }
  
    function handleTodoDelete(todoToDelete) {
      dispatch(deleteTodo(todoToDelete));
    }
  
    function handleTodoEdit(newTodoWithSameId) {
      dispatch(editTodo(newTodoWithSameId));
    }
  
    return (
      <div className="Todos">
        <form className="todos-form" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            className="todos-toggle-checked"
            onChange={handleToggleChange}
          />
          <input
            type="text"
            className="todos-new-input"
            value={newTodo}
            onChange={(e) => dispatch(updateNewTodo(e.target.value))}
          />
          <button>+</button>
        </form>
        <div className="todos-container">
          {loading ? <p>Loading...</p> : todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              onTodoDelete={handleTodoDelete}
              onEditingIdChange={setEditingId}
              onTodoEdit={handleTodoEdit}
            />
          ))}
        </div>
  
        <button onClick={() => setShowClock(!showClock)}>On/off clock</button>
        {showClock && <Clock />}
      </div>
    );
}

export default Todos;
