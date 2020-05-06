export type TodoState =  any[];
export type Action = { type: String, id: number, text: String };

const initialState: TodoState = [
    { text: "four", complete: true, id: "1" },
    { text: "five", complete: false, id: "2" },
    { text: "six", complete: false, id: "3" }
]

const todos = (state = initialState, action: Action) => {
  switch (action.type) {
     case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      ) 
  }
  return state;
}

export default todos
