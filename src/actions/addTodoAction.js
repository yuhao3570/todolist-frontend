export default function addTodoAction(newTodo) {
  return async (dispatch) => {
    dispatch({type: 'ADD_TODO_START'});
    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTodo)
    });
    
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      newTodo
    })
  }
}