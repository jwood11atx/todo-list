import { connect } from 'react-redux';

import * as todoListActions from '../actions/todoListActions';
import TaskDetail from '../components/TaskDetail.jsx';

const mapStateToProps = state => ({
  tasks: state.todoList.tasks,
  selectedTask: state.todoList.selectedTask,
});

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(todoListActions.getTasks()),
    destroyTask: id => dispatch(todoListActions.destroyTask(id)),
    completeTask: idx => dispatch(todoListActions.completeTask(idx)),
    updateTask: task => dispatch(todoListActions.updateTask(task)),
    selectTask: task => dispatch(todoListActions.selectTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
