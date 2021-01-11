import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../constants.js';

export const filterAll = () => ({
  type: FILTER_ALL
});

export const filterActive = () => ({
  type: FILTER_ACTIVE
});

export const filterCompleted = () => ({
  type: FILTER_COMPLETED
});
