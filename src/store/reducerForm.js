import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, EDIT_BEGIN_TASK, EDIT_COMPLETE_TASK, TOGGLE_ALL_TASKS, FILTER_ALL_TASKS, FILTER_ACTIVE_TASKS, FILTER_COMPLETED_TASKS, DELETE_DONE_TASKS, SHOW_TASKS_LOCAL_STORAGE } from '../constants.js';

const defaultState = {
  tasks: []
};

const reducerForm = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK :
      const task = action.payload;
      const tasks = [...state.tasks, task];
      localStorage.setItem("todo", JSON.stringify(tasks));
      return {
        ...state,
        tasks: tasks
      };
    case REMOVE_TASK :
      const idRemove = action.payload;
      const indexRemove = [...state.tasks].map(task => task.id).indexOf(idRemove);
      const newTasks = [...state.tasks];
      const removeTasks = newTasks.splice(indexRemove, 1);
      localStorage.setItem("todo", JSON.stringify(newTasks));
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
      localStorage.setItem("todo", JSON.stringify(tasksToggle));
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
      localStorage.setItem("todo", JSON.stringify(tasksEditСomplete));
      return {
        ...state,
        tasks: tasksEditСomplete
      };
    case TOGGLE_ALL_TASKS :
      const check = action.payload;
      const tasksToggleAll = [...state.tasks].map((task) => {
        task.done = check;
        return task;
      });
      localStorage.setItem("todo", JSON.stringify(tasksToggleAll));
      return {
        ...state,
        tasks: tasksToggleAll
      };
    case FILTER_ALL_TASKS :
      const tasksFilterAll = [...state.tasks].map((task) => {
        task.hide = false;
        return task;
      });
      return {
        ...state,
        tasks: tasksFilterAll
      };
    case FILTER_ACTIVE_TASKS :
      const tasksFilterActive = [...state.tasks].map((task) => {
        task.hide = task.done === true;
        return task;
      });
      return {
        ...state,
        tasks: tasksFilterActive
      };
    case FILTER_COMPLETED_TASKS :
      const tasksFilterCompleted = [...state.tasks].map((task) => {
        task.hide = task.done !== true;
        return task;
      });
      return {
        ...state,
        tasks: tasksFilterCompleted
      };
    case DELETE_DONE_TASKS :
      const resultList = [...state.tasks].filter(task => task.done !== true);
      const removeList = [...state.tasks].filter(task => task.done === true);
      localStorage.setItem("todo", JSON.stringify(resultList));
      return {
        ...state,
        tasks: resultList
      };
    case SHOW_TASKS_LOCAL_STORAGE :
      const tasksLocalStorage = JSON.parse(localStorage.getItem("todo")) || {};
      const tasksShow = Object.values(tasksLocalStorage);
      return {
        ...state,
        tasks: tasksShow
      };
    default:
      return state;
  }
}

export default reducerForm;
