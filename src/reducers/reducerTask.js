import { EDIT_BEGIN_INPUT, CHANGE_INPUT_TASK } from '../constants.js';

const defaultState = {
  input: ''
};

const reducerTask = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_BEGIN_INPUT :
      return {
        input: action.payload
      };
    case CHANGE_INPUT_TASK :
      const input = action.payload;
      return {
        ...state,
        input: input
      };
    default:
      return state;
  }
}

export default reducerTask;
