import { combineReducers } from 'redux'
import todos from './todosReducer'
import visibilityFilter from './visibilityFilter'

export const rootReducer = combineReducers({
  todos:todos,
  visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

