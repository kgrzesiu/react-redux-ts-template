import {
  TodoState,
  TodoActions,
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_FAILED,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  IAddTodoAction,
  IToggleTodoAction
} from './types';
import { updateObject } from '../utilities';

const initialState: TodoState = {
  todos: [
    { text: "First todo", completed: true, id: 1 },
    { text: "Second todo", completed: false, id: 2 }],
  loading: false,
  error: undefined
}

const addTodo = (state: TodoState, action: IAddTodoAction) => {
  return updateObject(state, {
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        text: action.text,
        completed: false
      }
    ]
  })
}

const toggleTodo = (state: TodoState, action: IToggleTodoAction) => {
  return updateObject(state, {
    todos: state.todos.map(todo =>
      (todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  })
}

function todosReducer(
  state: Readonly<TodoState> = initialState,
  action: TodoActions
): Readonly<TodoState> {
  switch (action.type) {

    case ADD_TODO: return addTodo(state, action);
    case TOGGLE_TODO: return toggleTodo(state, action);
    case FETCH_TODOS_SUCCESS: return updateObject(state, { todos: action.todos, loading: false });
    case FETCH_TODOS_FAILED: return updateObject(state, { loading: false, error: action.error });
    case FETCH_TODOS_START: return updateObject(state, { loading: true, error: undefined });
    default:
      return state;
  }
}

export default todosReducer