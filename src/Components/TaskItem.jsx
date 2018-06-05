import React from 'react';

class TaskItem extends React.Component {
  render() {
    const { title, completed, id } = this.props.task;

    return (
      <div
        className={`task-item ${completed && "task-completed"}`}
        key={`task_${id}`}
        onClick={() => this.props.redirect(this.props.task)}
      >
        <span className="task-title">{title}</span>
        <div className="task-btn-wrapper">
          <button
            className="complete-task-btn"
            style={{
              backgroundColor: 'rgba(0,0,0,0.15)',
              padding: '3px 5px',
              cursor: completed ? 'default' : 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation();
              this.props.completeTask(id);
            }}
            disabled={completed}
            >
              Complete
            </button>
            <button
              className="destroy-task-btn"
              onClick={(e) => {
                e.stopPropagation();
                this.props.destroyTask(id);
              }}
            >
              X
            </button>
        </div>
      </div>
    );
  }
};

export default TaskItem;
