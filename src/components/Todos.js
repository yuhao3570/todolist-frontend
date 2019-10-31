import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import deleteTodoAction from '../actions/deleteTodoAction';
import addTodoAction from '../actions/addTodoAction';
import getTodosAction from '../actions/getTodosAction';
import updateTodoAction from '../actions/updateTodoAction';
import InputTodo from './InputTodo';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo, getTodos, deleteTodoById, updateTodo }) {
  
  useEffect(() => {
    (async function () {
      try {
        getTodos();
      } 
      catch (e) {
        console.error(e);
      }
    })();
  }, [])

  return (
    <div className="todos">
      <div className="heading">
        TODOS
          </div>
      <div className="input">
        <InputTodo addTodo={addTodo} />
      </div>

      <div className="details">
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            deleteTodo={deleteTodoById}
            updateTodo={updateTodo}
          />)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodosAction()),
    deleteTodoById: (id) => dispatch(deleteTodoAction(id)),
    addTodo: (todo) => dispatch(addTodoAction(todo)),
    updateTodo: (todo) => dispatch(updateTodoAction(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);