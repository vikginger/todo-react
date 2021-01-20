import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, EDIT_BEGIN_TASK, EDIT_COMPLETE_TASK, TOGGLE_ALL_TASKS, FILTER_ALL_TASKS, FILTER_ACTIVE_TASKS, FILTER_COMPLETED_TASKS, DELETE_DONE_TASKS, SHOW_TASKS_LOCAL_STORAGE } from '../constants.js';

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title,
    done: false,
    edit: false,
    hide: false
  }
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const toggleAllTasks = (check) => ({
  type: TOGGLE_ALL_TASKS,
  payload: check
});

export const editBeginTask = (id) => ({
  type: EDIT_BEGIN_TASK,
  payload: id
});

export const editCompleteTask = (id, label) => ({
  type: EDIT_COMPLETE_TASK,
  payload: {
    id,
    label
  }
});

export const filterAllTasks = () => ({
  type: FILTER_ALL_TASKS
});

export const filterActiveTasks = () => ({
  type: FILTER_ACTIVE_TASKS
});

export const filterCompletedTasks = () => ({
  type: FILTER_COMPLETED_TASKS
});

export const deleteDoneTasks = () => ({
  type: DELETE_DONE_TASKS
});

export const showTasksLocalStorage = () => ({
  type: SHOW_TASKS_LOCAL_STORAGE
});
