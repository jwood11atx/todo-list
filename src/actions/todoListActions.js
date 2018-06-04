const CREATE_TODO = 'CREATE_TODO';
const DESTROY_TODO = 'DESTROY_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

export const createTask = (taskInput) => ({
  type: CREATE_TODO,
  payload: taskInput,
});

export const destroyTask = (idx) => ({
  type: DESTROY_TODO,
  payload: idx,
});

export const completeTask = (idx) => ({
  type: COMPLETE_TODO,
  payload: idx,
});
