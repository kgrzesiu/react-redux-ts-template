import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../containers/Todo'
import { RootState } from '../reducers';
import { VisibilityFilters } from '../actions';
import { TOGGLE_TODO } from '../reducers/todos';

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

const getVisibleTodos = (todos:any, filter:any) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t:any) => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t:any) => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
  

const mapStateToProps = (state: RootState) => ({
    todosx: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: any) => ({
    onToggleTodo: (id:any) => dispatch({ type: TOGGLE_TODO, id: id})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)