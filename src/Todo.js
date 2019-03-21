import React, { Component } from 'react';


/**component displays Todo div w/: 
 * props: {
 *      task, 
 *      triggerRemove 
 * }
 */
class Todo extends Component {
    render() {
        return (<div className = "Todo">
                    <div>{this.props.task}</div>
                    <button onClick={this.props.triggerRemove}>X</button>
                </div>)
    }
}

export default Todo