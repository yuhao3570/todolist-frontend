import React, { useState } from 'react';

function TodoItem({todo, updateTodo, deleteTodo}) {
  let {todoId, text, done} = todo;
  let [todoStatus, setTodoStatus] = useState(done);

  const handleUpdate = (event) => {
    setTodoStatus(event.target.checked);
    updateTodo({
      ...todo, 
      done: todoStatus
    })
  }

  return (
    <div className="todo-item">
      <span>{text}</span>
      <button 
        id={todoId} 
        className="deleteTodo" 
        onClick={(event) => deleteTodo(event.target.id)}
      ></button>
      <input 
        type="checkbox" 
        checked={todoStatus}
        onChange={handleUpdate} 
      />
    </div>
  );
}

export default TodoItem;