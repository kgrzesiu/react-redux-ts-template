import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Todo from './Todo'
import { RootState } from '../../store';
import { VisibilityFilters } from '../../store/visibilityFilters/types';
import { toggleTodo, replaceTodos } from '../../store/todos/actions';
import axios from 'axios';

import '../../css/TodoList.css';

class TodoList extends Component<ReduxProps> {

  state = {
    requestError: false
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then(response => {
        let newTodos = response.data.map((todo: any) => ({
          text: todo.title,
          id: todo.id,
          completed: todo.completed
        }));
        this.props.replaceTodos(newTodos.slice(0,6));
      })
      .catch(error => {
        this.setState({
          requestError: true
        })
      })
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
  { toggleTodo, replaceTodos }
);

type ReduxProps = ConnectedProps<typeof reduxConnector>;

export default reduxConnector(TodoList)