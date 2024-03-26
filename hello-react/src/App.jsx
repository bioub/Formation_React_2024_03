import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const todos = [
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ];
  const editingId = 789;

  /** @param {import('react').FormEvent<HTMLFormElement>} event  */
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit', event);
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} isEditing={editingId === todo.id} />)}
      </div>
    </>
  );
}

export default App;
