import { fork } from 'redux-saga/effects'

import * as watchers from './watchers';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function* root() {
  yield [
    fork(watchers.getTasksSaga),
    fork(watchers.createTaskSaga),
    fork(watchers.destroyTaskSaga),
    fork(watchers.completeTaskSaga),
    fork(watchers.updateTaskSaga),
  ];
};
