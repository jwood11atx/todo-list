import React from 'react';

import TaskItem from '../containers/TaskItemContainer';

class ListDisplay extends React.Component {
  displayTasks() {
    return (this.props.tasks.map((task) => {
      return <TaskItem task={task} redirect={this.props.redirect} key={`task_${task.id}`}/>;
    }));
  }

  render() {
    return(
      <div className="task-list-wrapper">
        {!this.props.tasks.length ? <div>No tasks available</div> : this.displayTasks()}
      </div>
    );
  }
};

export default ListDisplay;
