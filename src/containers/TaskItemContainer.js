import { connect } from 'react-redux';

import * as todoListActions from '../actions/todoListActions';
import TaskItem from '../components/TaskItem.jsx';

const mapDispatchToProps = dispatch => {
  return {
    destroyTask: id => dispatch(todoListActions.destroyTask(id)),
    completeTask: idx => dispatch(todoListActions.completeTask(idx)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
