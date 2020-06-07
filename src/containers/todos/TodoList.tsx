import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../../store';
import { VisibilityFilters } from '../../store/visibilityFilters/types';
import { toggleTodo, fetchTodos } from '../../store/todos/actions';

import styles from '../../css/TodoList.module.css'; //using css modules
import { Todo as TodoItem } from '../../store/todos/types';

class TodoList extends Component<ReduxProps> {

  state = {
    requestError: false
  }

  async componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let errorPrompt = this.props.error !== undefined  ? <p>Error loading async todos</p> : null;
    let loadingPrompt = null;
    if (errorPrompt == null){
      loadingPrompt = this.props.loading ? <p>Loading todos</p> : <p>Loaded todos</p>;
    }
   
    return (
      //using styles (css modules) instead of global style
      <ul className={styles.TodoList}>
        {this.props.todos.map((todo: any) =>
          <Todo
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
            key={todo.id}></Todo>)
        }
        {errorPrompt}
        {loadingPrompt}
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
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter),
  loading: state.todos.loading,
  error: state.todos.error
});

const reduxConnector = connect(
  mapStateToProps,
  { toggleTodo, fetchTodos }
);

type ReduxProps = ConnectedProps<typeof reduxConnector>;

export default reduxConnector(TodoList)