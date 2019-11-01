export default function getTodosAction() {
  return async (dispatch) => {
    dispatch({type: 'GET_TODOS_START'});
    let fetchResult = await fetch('/todos', {
      headers: {'Content-Type': 'application/json'}
    })
    let data = await fetchResult.json();
    dispatch({
      type: 'GET_TODOS_SUCCESS',
      data,
      currentMaxId: Math.max(...data.map(todo => todo.id))
    })
  }
}