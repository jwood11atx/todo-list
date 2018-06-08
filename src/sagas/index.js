import { fork } from 'redux-saga/effects'

import * as watchers from './watchers';

export default function* root() {
  yield [
    fork(watchers.getTasksSaga),
    fork(watchers.createTaskSaga),
    fork(watchers.destroyTaskSaga),
    fork(watchers.completeTaskSaga),
    fork(watchers.updateTaskSaga),
  ];
};
