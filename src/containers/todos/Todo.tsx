import React, { Component, MouseEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';

import '../../css/Todo.css'

interface TodoProps extends RouteComponentProps {
    completed: Boolean,
    text: string,
    key: string,
    id: string,
    onClick: Function
}

class Todo extends Component<TodoProps> {
    
    onTodoClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.onClick();
    }

    detailsClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.history.push("/todos/"+this.props.id)
    }

    render() {
        return (
            <li className="Todo"
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                {this.props.text}
                <button onClick={this.onTodoClick}>TOGGLE</button>
                <button onClick={this.detailsClickHandler}>DETAILS</button>
            </li>
        )
    }
}

export default withRouter(Todo);