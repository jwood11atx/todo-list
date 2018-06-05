import { call, put } from 'redux-saga/effects'

import * as api from './api';

export function* callGetTasks() {
  const result = yield call(api.getTasksAPI);
  yield put({ type: 'LOAD_TASKS', payload: result });
};

export function* callCreateTask(action) {
  const result = yield call(() => api.createTaskAPI(action));
  yield put({ type: 'LOAD_TASKS', payload: result });
};

export function* callDestroyTask(action) {
  const result = yield call(() => api.detroyTaskAPI(action));
  yield put({ type: 'LOAD_TASKS', payload: result });
};

export function* callCompleteTask(action) {
  const result = yield call(() => api.completeTaskAPI(action));
  yield put({ type: 'LOAD_TASKS', payload: result });
};

export function* callUpdateTask(action) {
  const result = yield call(() => api.updateTaskAPI(action));
  yield put({ type: 'LOAD_TASKS', payload: result });
};
