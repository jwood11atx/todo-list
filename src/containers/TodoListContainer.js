import { connect } from 'react-redux';

import * as todoListActions from '../actions/todoListActions.js';
import TodoList from '../components/TodoList.jsx';

const mapStateToProps = state => ({ tasks: state.todoList.tasks });

const mapDispatchToProps = dispatch => {
  return {
    createTask: taskInput => dispatch(todoListActions.createTask(taskInput)),
    destroyTask: idx => dispatch(todoListActions.destroyTask(idx)),
    completeTask: idx => dispatch(todoListActions.completeTask(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
