function TodoInputValue({ todo = {}, onTodoEdit = () => {}, onEditingIdChange = () => {} }) {

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onEditingIdChange(-1)
    }
  }

  return (
    <input className="TodoInputValue" value={todo.title} onChange={(e) => onTodoEdit({...todo, title: e.target.value})} onKeyDown={handleKeyDown}/>
  );
}

export default TodoInputValue;
