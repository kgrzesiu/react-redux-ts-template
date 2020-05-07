export interface Todo {
  readonly id: number,
  readonly completed: Boolean,
  readonly text: String
}
export type TodoState = Todo[];

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodo {
  type: "ADD_TODO",
  text: string
}

interface ToggleTodo {
  type: "TOGGLE_TODO",
  id: number
}

type TodoAction = AddTodo | ToggleTodo

const initialState: TodoState = [
  { text: "First todo", completed: true, id: 1 },
  { text: "Second todo", completed: false, id: 2 }
]

function todosReducer(
  state: ReadonlyArray<Todo> = initialState,
  action: TodoAction
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