import React, { Component, MouseEvent } from 'react'
import '../../css/Todo.css'

interface TodoProps {
    completed: Boolean,
    text: string,
    key: string,
    onClick: Function
}

class Todo extends Component<TodoProps> {
    
    onTodoClick = (event: MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        this.props.onClick();
    }

    render() {
        return (
            <li className="Todo"
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