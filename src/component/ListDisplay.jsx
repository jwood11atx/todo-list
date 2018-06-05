import React from 'react';

class ListDisplay extends React.Component {
  displayTasks() {
    return (this.props.tasks.map((task, idx) => {
      const { title, completed } = task;
      return(
        <div className={`task-item ${completed && "task-completed"}`} key={`task_${idx}`}>
          <span className="task-title">{title}</span>
          <div className="task-btn-wrapper">
            <button
              style={{
                backgroundColor: 'rgba(0,0,0,0.15)',
                padding: '3px 5px',
                cursor: completed ? 'default' : 'pointer',
              }}
              onClick={() => this.props.completeTask(idx)}
              disabled={completed}
              >
                Complete
              </button>
              <button onClick={() => this.props.destroyTask(idx)} >
                X
              </button>
          </div>
        </div>
      );
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
