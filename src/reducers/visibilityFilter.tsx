import { VisibilityFilters } from "../actions";

type Action = { type: String, filter:String};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action:Action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  export default visibilityFilter
  