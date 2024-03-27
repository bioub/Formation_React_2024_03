function TodoSpanValue({ todo = {}, onEditingIdChange = () => {} }) {
  return (
    <span className="TodoSpanValue" onDoubleClick={() => onEditingIdChange(todo.id)}>
      {todo.title}
    </span>
  );
}

export default TodoSpanValue;
