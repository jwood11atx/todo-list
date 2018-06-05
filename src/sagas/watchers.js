import { takeEvery } from 'redux-saga/effects';

import * as workers from './workers';

export function* getTasksSaga() {
  yield takeEvery('GET_TASKS', workers.callGetTasks);
};

export function* createTaskSaga() {
  yield takeEvery('CREATE_TASK', workers.callCreateTask);
};

export function* destroyTaskSaga() {
  yield takeEvery('DESTROY_TASK', workers.callDestroyTask);
};

export function* completeTaskSaga() {
  yield takeEvery('COMPLETE_TASK', workers.callCompleteTask);
};

export function* updateTaskSaga() {
  yield takeEvery('UPDATE_TASK', workers.callUpdateTask);
};
