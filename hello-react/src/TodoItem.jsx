import TodoInputValue from "./TodoInputValue";
import TodoSpanValue from "./TodoSpanValue";

export function TodoItem({ todo = {}, isEditing = false }) {
  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todoCompleted" checked={todo.completed} />
      {!isEditing ? <TodoSpanValue todo={todo} /> : <TodoInputValue todo={todo} />}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
