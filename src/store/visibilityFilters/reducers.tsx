import { VisibilityFilters, SET_VISIBILITY_FILTER } from "./types";

interface VisibilityAction {
  type: String,
  filter: VisibilityFilters
}

function visibilityFilterReducer(
  state: VisibilityFilters = VisibilityFilters.SHOW_ALL,
  action: VisibilityAction
):VisibilityFilters {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterReducer
