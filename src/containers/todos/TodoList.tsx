import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../../store';
import { VisibilityFilters } from '../../store/visibilityFilters/types';
import { toggleTodo } from '../../store/todos/actions';

import '../../css/TodoList.css';

class TodoList extends Component<ReduxProps> {
  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map((todo: any) =>
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
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const reduxConnector = connect(
  mapStateToProps,
  { toggleTodo }
);

type ReduxProps = ConnectedProps<typeof reduxConnector>;

export default reduxConnector(TodoList)