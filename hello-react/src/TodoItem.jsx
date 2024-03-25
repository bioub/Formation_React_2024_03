import TodoSpanValue from "./TodoSpanValue";

export function TodoItem() {
  return (
    <div className="TodoItem" data-todo-id="123abc">
      <input type="checkbox" className="todoCompleted" checked={true} />
      <TodoSpanValue />
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
