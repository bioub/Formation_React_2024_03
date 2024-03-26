import TodoInputValue from "./TodoInputValue";
import TodoSpanValue from "./TodoSpanValue";

export function TodoItem({ todo = {}, isEditing = false, onTodoDelete = () => {}, onEditingIdChange = () => {}, onTodoEdit = () => {} }) {
  return (
    <div className="TodoItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todoCompleted" checked={todo.completed} onChange={(e) => onTodoEdit({...todo, completed: e.target.checked})} />
      {!isEditing ? <TodoSpanValue todo={todo} onEditingIdChange={onEditingIdChange} /> : <TodoInputValue todo={todo} onTodoEdit={onTodoEdit} onEditingIdChange={onEditingIdChange} />}
      <button className="todosDeleteBtn" onClick={() => onTodoDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
