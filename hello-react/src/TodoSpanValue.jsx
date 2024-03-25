function TodoSpanValue({ todo = {} }) {
  return (
    <span className="TodoSpanValue">
      {todo.title}
    </span>
  );
}

export default TodoSpanValue;
