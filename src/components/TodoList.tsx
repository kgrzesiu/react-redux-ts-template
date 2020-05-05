import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../containers/Todo'

interface Props {
    //todos: []
}
interface State {
    //todos: []
}

export class TodoList extends Component<any, any> {

    render() {
        console.log('List:',this.props.todos);
        return (
            <ul>
                { this.props.todos.map((todo:any) => 
                    <Todo completed={todo.completed} text={todo.text} key={todo.id}></Todo>)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: []) => ({
    todos: state
})

const mapDispatchToProps = {
    
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoList;