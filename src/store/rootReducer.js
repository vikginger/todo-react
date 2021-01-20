import { combineReducers } from 'redux';
import reducerForm from './reducerForm.js';

const rootReducer = combineReducers({
  form: reducerForm
});

export default rootReducer;
