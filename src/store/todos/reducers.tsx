import { Todo, TodoState,TodoActions, ADD_TODO, TOGGLE_TODO } from './types';

const initialState: TodoState= [
  { text: "First todo", completed: true, id: 1 },
  { text: "Second todo", completed: false, id: 2 }
]

function todosReducer(
  state: ReadonlyArray<Todo> = initialState,
  action: TodoActions
): ReadonlyArray<Todo> {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state;
  }
}

export default todosReducer