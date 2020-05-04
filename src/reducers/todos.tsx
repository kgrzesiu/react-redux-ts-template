type AppState = {}
type Action = { type: String, id:number, text:String};

const todos = (state = [], action:Action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      /* case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        ) */
      default:
        return state
    }
  }
  
  export default todos
  