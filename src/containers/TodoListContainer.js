import { connect } from 'react-redux';

import * as todoListActions from '../actions/todoListActions';
import TodoList from '../components/TodoList.jsx';

const mapStateToProps = state => ({ tasks: state.todoList.tasks });

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(todoListActions.getTasks()),
    createTask: taskInput => dispatch(todoListActions.createTask(taskInput)),
    destroyTask: id => dispatch(todoListActions.destroyTask(id)),
    completeTask: idx => dispatch(todoListActions.completeTask(idx)),
    selectTask: task => dispatch(todoListActions.selectTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
