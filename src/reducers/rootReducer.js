const initState = {
  todos: [],
  updating: false
}

const rootReducer = ( state = initState, action) => {
  if(action.type === 'GET_TODOS_START') {
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'GET_TODOS_SUCCESS'){
    return {
      ...state,
      todos: [...action.data],
      updating: false
    }
  }

  return state;
}

export default rootReducer;