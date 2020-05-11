import { SET_VISIBILITY_FILTER, ISetVisibilityFilter } from './types'

export function setVisibilityFilter(filter: string):ISetVisibilityFilter {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
