export default function updateTodoAction(updateNeeded) {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_TODO_START'});
    await fetch(`/todos/${updateNeeded.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateNeeded)
    });
    dispatch({
      type: 'UPDATE_TODO_SUCCESS',
      updateNeeded
    })
  }
}