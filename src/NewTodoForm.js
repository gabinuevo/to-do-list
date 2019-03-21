import React, { Component } from 'react';

/**
 *  render a form that when submitted, creates a new Todo. 
 *  props: { triggerAddNewTodo() }
 *  input: { task }
 *  When the form is submitted, clear the input values.
 */
class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange(evt) {
        console.log('I AM RUNNING', evt.target.name)
        this.setState(
            { [evt.target.name]: evt.target.value}
        )
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAddNewTodo(this.state);
        this.setState({
            task: ''
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label htmlFor="task"> Todo: </label>
                <input id="task" name="task" value={this.state.task} onChange={this.handleChange}/>

                <button>  Add New Todo!  </button>
            </form>
        );
    }
}

export default NewTodoForm;