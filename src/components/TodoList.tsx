import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../containers/Todo'
import { RootState } from '../store';
import { VisibilityFilters } from '../store/visibilityFilters/types';
import { toggleTodo } from '../store/todos/actions';

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
            onClick={() => this.props.toggleTodo(todo.id)}
            key={todo.id}></Todo>)
        }
      </ul>
    )
  }
}

const getVisibleTodos = (todos: any, filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      console.log(filter)
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state: RootState) => ({
  todosx: getVisibleTodos(state.todos, state.visibilityFilter)
});

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList)