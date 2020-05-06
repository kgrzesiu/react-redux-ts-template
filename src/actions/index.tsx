let nextTodoId = 0
export const addTodo = (text:String) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter:String) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id:number) => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
