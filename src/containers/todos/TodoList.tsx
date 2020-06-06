import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../../store';
import { VisibilityFilters } from '../../store/visibilityFilters/types';
import { toggleTodo, fetchTodos } from '../../store/todos/actions';

import '../../css/TodoList.css';
import { Todo as TodoItem } from '../../store/todos/types';

class TodoList extends Component<ReduxProps> {

  state = {
    requestError: false
  }

  async componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let errorPrompt = this.state.requestError ? <p>Error loading async todos</p> : null;
    return (
      <ul className="TodoList">
        {this.props.todos.map((todo: any) =>
          <Todo
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
            key={todo.id}></Todo>)
        }
        {errorPrompt}
      </ul>
    )
  }
}

const getVisibleTodos = (todos: TodoItem[], filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)
});

const reduxConnector = connect(
  mapStateToProps,
  { toggleTodo, fetchTodos }
);

type ReduxProps = ConnectedProps<typeof reduxConnector>;

export default reduxConnector(TodoList)