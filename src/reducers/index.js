import { combineReducers } from 'redux';

import todoList from './todoListReducer.js';

const rootReducer = combineReducers({
  todoList,
});

export default rootReducer;
