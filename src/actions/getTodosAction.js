export default function getTodosAction() {
  return async (dispatch) => {
    dispatch({type: 'GET_TODOS_START'});
    let fetchResult = await fetch('http://localhost:8080/todos', {
      header: {'Content-Type': 'application/json'}
    })
    console.log(fetchResult)
    let data = fetchResult.json();
    dispatch({
      type: 'GET_TODO_SUCCESS',
      data
    })
  }
}