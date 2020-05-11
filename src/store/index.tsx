import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducer from './todos/reducers'
import visibilityFilterReducer from './visibilityFilters/reducers'

const rootReducer = combineReducers({
  todos:todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)  
  );
  return store;
}