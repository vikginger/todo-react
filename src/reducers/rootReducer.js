import { combineReducers } from 'redux';
import reducerForm from './reducerForm.js';
import reducerTask from './reducerTask.js';
import reducerFooter from './reducerFooter.js';

const rootReducer = combineReducers({
  form: reducerForm,
  task: reducerTask,
  footer: reducerFooter
});

export default rootReducer;
