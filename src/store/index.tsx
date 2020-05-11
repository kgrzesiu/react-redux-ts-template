import { combineReducers } from 'redux'
import todosReducer from './todos/reducers'
import visibilityFilterReducer from './visibilityFilters/reducers'

export const rootReducer = combineReducers({
  todos:todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>