import { ADD_TASK, CHANGE_INPUT, REMOVE_TASK, TOGGLE_TASK, EDIT_BEGIN_TASK, EDIT_COMPLETE_TASK, TOGGLE_ALL_TASKS, TOGGLE_CHANGE, FILTER_ALL_TASKS, FILTER_ACTIVE_TASKS, FILTER_COMPLETED_TASKS, DELETE_DONE_TASKS } from '../constants.js';

const defaultState = {
  tasks: [],
  title: '',
  isChecked: false
};

const reducerForm = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT :
      const title = action.payload;
      return {
        ...state,
        title: title
      };
    case ADD_TASK :
      const task = action.payload;
      const tasks = [...state.tasks, task];
      return {
        ...state,
        tasks: tasks,
        title: ''
      };
    case REMOVE_TASK :
      const idRemove = action.payload;
      const indexRemove = [...state.tasks].map(task => task.id).indexOf(idRemove);
      const newTasks = [...state.tasks];
      const removeTasks = newTasks.splice(indexRemove, 1);
      return {
        ...state,
        tasks: newTasks
      };
    case TOGGLE_TASK :
      const idToggle = action.payload;
      const tasksToggle = [...state.tasks].map(task => {
        if (task.id === idToggle) {
          task.done = !task.done;
        }
        return task;
      });
      return {
        ...state,
        tasks: tasksToggle
      };
    case EDIT_BEGIN_TASK :
      const idEditBegin = action.payload;
      const tasksEditBegin = [...state.tasks].map(task => {
        if (task.id === idEditBegin) {
          task.edit = true;
        }
        return task;
      });
      return {
        ...state,
        tasks: tasksEditBegin
      };
    case EDIT_COMPLETE_TASK :
      const idEditСomplete = action.payload.id;
      const label = action.payload.label;
      const tasksEditСomplete = [...state.tasks].map(task => {
        if (task.id === idEditСomplete) {
          task.edit = false;
          task.title = label
        }
        return task;
      });
      return {
        ...state,
        tasks: tasksEditСomplete
      };
    case TOGGLE_CHANGE :
      const checkChange = action.payload;
      return {
        ...state,
        isChecked: checkChange
      };
    case TOGGLE_ALL_TASKS :
      const check = action.payload;
      const tasksToggleAll = [...state.tasks].map((task) => {
        task.done = check;
      });
      return {
        ...state,
        tasks: tasksToggleAll
      };
    case FILTER_ALL_TASKS :
      const tasksFilterAll = [...state.tasks].map(task => task.hide = false);
      return {
        ...state,
        tasks: tasksFilterAll
      };
    case FILTER_ACTIVE_TASKS :
      const tasksFilterActive = [...state.tasks].map((task) => {
        task.hide = task.done === true
      });
      return {
        ...state,
        tasks: tasksFilterActive
      };
    case FILTER_COMPLETED_TASKS :
      const tasksFilterCompleted = [...state.tasks].map((task) => {
        task.hide = task.done !== true
      });
      return {
        ...state,
        tasks: tasksFilterCompleted
      };
    case DELETE_DONE_TASKS :
      const resultList = [...state.tasks].filter(task => task.done !== true);
      const removeList = [...state.tasks].filter(task => task.done === true);
    //  removeList.forEach((task) => this.removeItem(task.id));
      return {
        ...state,
        tasks: resultList
      };
    default:
      return state;
  }
}

export default reducerForm;
