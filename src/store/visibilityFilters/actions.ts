import { SET_VISIBILITY_FILTER } from './types'

export function setVisibilityFilter(filter: String) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

