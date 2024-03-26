import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');
  const editingId = 789;

  /** @param {import('react').FormEvent<HTMLFormElement>} event  */
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      { id: Math.random(), title: newTodo, completed: false },
      ...todos,
    ]);
    setNewTodo('');
  }

  /** @param {import('react').ChangeEvent<HTMLInputElement>} event  */
  function handleToggleChange(event) {
    setTodos(
      // on créé un nouveau tableau todos, qui contient soit :
      // les todos actuelles si completed correspond déjà à la valeur de la checkbox
      // des nouvelles todos sinon
      todos.map((todo) => (todo.completed === event.target.checked) ? todo : {...todo, completed: event.target.checked})
    )
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" onChange={handleToggleChange} />
        <input type="text" className="todos-new-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} isEditing={editingId === todo.id} />)}
      </div>
    </>
  );
}

export default App;
