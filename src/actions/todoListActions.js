import * as types from './';

export const getTasks = () => ({ type: types.GET_TASKS });
export const createTask = taskInput => ({ type: types.CREATE_TASK, payload: taskInput });
export const destroyTask = id => ({ type: types.DESTROY_TASK, payload: id });
export const completeTask = id => ({ type: types.COMPLETE_TASK, payload: id });
export const updateTask = task => ({ type: types.UPDATE_TASK, payload: task });
export const selectTask = task => ({ type: types.SELECT_TASK, payload: task });
