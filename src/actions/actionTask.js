import { EDIT_BEGIN_INPUT, CHANGE_INPUT_TASK } from '../constants.js';

export const editBeginInput = (input) => ({
  type: EDIT_BEGIN_INPUT,
  payload: input
});

export const changeInputTask = (input) => ({
  type: CHANGE_INPUT_TASK,
  payload: input
});
