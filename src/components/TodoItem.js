import React from 'react';

function TodoItem({todo, updateTodo, deleteTodo}) {
  const handleUpdate = (event) => {
    updateTodo({
      ...todo, 
      done: event.target.checked
    })
  }

  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div className="item-actions">
        <button 
          id={todo.id} 
          className="delete-button" 
          onClick={(event) => deleteTodo(parseInt(event.target.id))}
        ></button>
        <input 
          className=""
          type="checkbox" 
          checked={todo.done}
          onChange={handleUpdate} 
        />
      </div>
    </div>
  );
}

export default TodoItem;