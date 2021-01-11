import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../constants.js';

const defaultState = {
  filterAll: true,
  filterActive: false,
  filterCompleted: false
};

const reducerFooter = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_ALL :
      return {
        ...state,
        filterAll: true,
        filterActive: false,
        filterCompleted: false
      };
    case FILTER_ACTIVE :
      return {
        ...state,
        filterAll: false,
        filterActive: true,
        filterCompleted: false
      };
    case FILTER_COMPLETED :
      return {
        ...state,
        filterAll: false,
        filterActive: false,
        filterCompleted: true
      };
    default:
      return state;
  }
}

export default reducerFooter;
