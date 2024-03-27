"use client"

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

async function fetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 20);
  }
  
  // function fetchTodosOld() {
  //   return fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => data.slice(0, 20));
  // }
  
  // fetchTodos().then((todos) => {
  
  // })

function Todos() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("ABC");
    const [editingId, setEditingId] = useState(-1);
  
    useEffect(() => {
      fetchTodos().then((todos) => {
        setTodos(todos);
      });
    }, []);
  
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
      setTodos([
        { id: Math.random(), title: newTodo, completed: false },
        ...todos,
      ]);
      setNewTodo("");
    }
  
    /** @param {import('react').ChangeEvent<HTMLInputElement>} event  */
    function handleToggleChange(event) {
      setTodos(
        // on créé un nouveau tableau todos, qui contient soit :
        // les todos actuelles si completed correspond déjà à la valeur de la checkbox
        // des nouvelles todos sinon
        todos.map((todo) =>
          todo.completed === event.target.checked
            ? todo
            : { ...todo, completed: event.target.checked }
        )
      );
    }
  
    function handleTodoDelete(todoToDelete) {
      setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
    }
  
    function handleTodoEdit(newTodoWithSameId) {
      setTodos(
        todos.map((todo) =>
          todo.id === newTodoWithSameId.id ? newTodoWithSameId : todo
        )
      );
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
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button>+</button>
        </form>
        <div className="todos-container">
          {todos.map((todo) => (
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
      </div>
    );
}

export default Todos;
