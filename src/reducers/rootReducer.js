const initState = {
  todos: [],
  currentMaxId: 0,
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
      currentMaxId: action.currentMaxId,
      updating: false
    }
  }

  if(action.type === 'ADD_TODO_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'ADD_TODO_SUCCESS'){
    return {
      todos: [...state.todos, action.newTodo],
      updating: false,
      currentMaxId: action.newTodo.id
    }
  }

  if(action.type === 'UPDATE_TODO_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'UPDATE_TODO_SUCCESS'){
    let tempTodos = [...state.todos];
    let {id, text, done} = action.updateNeeded;
    
    for(let todo of tempTodos) {
      if(todo.id === id){
        todo.text = text;
        todo.done = done;
      }
    }

    return {
      ...state,
      updating: false,
      todos: [...tempTodos]
    }
  }

  if(action.type === 'DELETE_TODO_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'DELETE_TODO_SUCCESS'){
    return {
      ...state,
      updating: false,
      todos: state.todos.filter(todo => todo.id !== action.id)
    }
  }

  return state;
}

export default rootReducer;