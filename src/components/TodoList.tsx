import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../containers/Todo'
import { RootState } from '../reducers';

interface Props {
    //todos: []
}
interface State {
    //todos: []
}

type ReduxType = ReturnType<typeof mapStateToProps>

class TodoList extends Component<any> {
    render() {
        return (
            <ul>
                {this.props.todosx.map((todo: any) =>
                    <Todo 
                    {...todo}
                    onClick={() => this.props.onToggleTodo(todo.id)} 
                    key={todo.id}></Todo>)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    todosx: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
    onToggleTodo: (id:any) => dispatch({ type: 'TOGGLE_TODO', id: id})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
// export default TodoList;