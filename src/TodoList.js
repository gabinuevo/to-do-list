import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo';
import uuid from 'uuid/v4';


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.addNewTodo = this.addNewTodo.bind(this);
        this.remove = this.remove.bind(this);
    }

    addNewTodo(newTodo) {
        let todo = {...newTodo, id: uuid()}
        this.setState(st => ({
                todos: [...st.todos, todo]
        }))
    }

    remove(id) {
        console.log('remove is running', id)
        this.setState(st => ({ todos: 
                            st.todos.filter(t => t.id!==id)}))
    }

    render() {
        let todos = this.state.todos.map(t=><Todo key = {t.id}
                                                task={t.task} 
                                                triggerRemove={() => this.remove(t.id)} />)
        return(
            <div className="TodoList">
                <NewTodoForm triggerAddNewTodo={this.addNewTodo} />
                {todos}
            </div>
        )
    }
}

export default TodoList