import React from 'react';
import { connect } from react-redux;
import deleteTodoAction from '../actions/deleteTodoAction';
import addTodoAction from '../actions/addTodoAction';
import InputTodo from './InputTodo';
import TodoItem from './TodoItem';

function TodoList({todos}) {
    return(
        <div className="todos">
            <div className="heading">
                TODOS
            </div>
            <div className="input">
                <InputTodo addTodo={this.addTodoFromInput}/>
            </div>

            <div className="details">
                {todos.map(todo => <TodoItem item={todo} delete={this.deleteTodo} complete={this.completeTodo}/>)}
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
		addTodo: (todo) =>  dispatch(addTodoAction(todo)),
		updateTodo: (todo) => dispatch(updateTodoAction(todo))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);



class Todos extends React.Component{

    addTodoFromInput(input){
        this.setState({
            todos: [...this.state.todos, {name: input, completed: false}]
        })
    }

    deleteTodo(name){
        this.setState({todos: this.state.todos.filter((todo) => todo.name !== name)});
    }

    completeTodo(name, checked){
        this.state.todos.find((todo) => todo.name === name)

        let tempTodos = this.state.todos;
        tempTodos.find((todo) => todo.name === name).completed = checked;

        this.setState(tempTodos);
    }

}

export default TodoList;