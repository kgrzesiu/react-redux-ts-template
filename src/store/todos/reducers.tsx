import { TodoState, TodoActions, ADD_TODO, TOGGLE_TODO, LOADED_TODOS, LOADING_FAILED, IAddTodoAction, IToggleTodoAction } from './types';
import { updateObject } from '../utilities';

const initialState: TodoState = {
  todos: [
    { text: "First todo", completed: true, id: 1 },
    { text: "Second todo", completed: false, id: 2 }],
  loading: false,
  error: undefined
}

const addTodo = (state:TodoState, action:IAddTodoAction) => {
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

const toggleTodo = (state:TodoState, action:IToggleTodoAction) => {
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
    case TOGGLE_TODO: return toggleTodo(state,action);
    case LOADED_TODOS: return updateObject(state, {todos:action.todos});
    case LOADING_FAILED: return updateObject(state, {loading:false});
    default:
      return state;
  }
}

export default todosReducer