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
        console.log('State', this.props.todosx);
        return (
            <ul>
                {this.props.todosx.map((todo: any) =>
                    <Todo completed={todo.completed} text={todo.text} key={todo.id}></Todo>)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    todosx: state.todos.todos
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(TodoList)
// export default TodoList;