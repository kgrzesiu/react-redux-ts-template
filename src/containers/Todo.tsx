import React, { Component, MouseEvent } from 'react'

interface Props {
    completed: Boolean,
    text: String,
    key: String,
    onClick: Function
}

class Todo extends Component<Props, {}> {
    
    onTodoClick = (event: MouseEvent) => {
        event.preventDefault();
        this.props.onClick();
    }

    render() {
        return (
            <li
                onClick={this.onTodoClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
            </li>
        )
    }
}

export default Todo;