export default function deleteTodoAction(id) {
  return async (dispatch) => {
    dispatch({type: 'DELETE_TODO_START'});
    await fetch(`/todos/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });
    
    dispatch({
      type: 'DELETE_TODO_SUCCESS',
      id
    })
  }
}