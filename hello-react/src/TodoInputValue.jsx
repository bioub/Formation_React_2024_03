function TodoInputValue({ todo = {} }) {
  return (
    <input className="TodoInputValue" value={todo.title} />
  );
}

export default TodoInputValue;
