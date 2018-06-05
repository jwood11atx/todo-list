import React from 'react';

import ListDisplay from './ListDisplay.jsx';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      taskInput: '',
    };

    this.taskInputChange = this.taskInputChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  componentDidMount() {
    const taskInputField = document.getElementsByClassName('add-task')[0];
    taskInputField.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.submitTask();
    });
  }

  taskInputChange(e) {
    this.setState({ taskInput: e.target.value });
  }

  clearInput() {
    this.setState({ taskInput: '' });
  }

  submitTask() {
    const { taskInput } = this.state;
    if (taskInput) {
      this.props.createTask(taskInput);
      this.clearInput();
      document.getElementsByClassName('add-task')[0].focus();
    }
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <div className="todo-list-header">
          <div className="task-input-wrapper">
            <h2 style={{ margin: 0, padding: '25px 0px' }}>TO-DO:</h2>
            <input
              className="add-task"
              type="text"
              value={this.state.taskInput}
              onChange={this.taskInputChange}
            />
            <button
              className="task-submit"
              style={{
                margin: '10px auto',
                backgroundColor: '#3fbaf9',
                color: '#fff',
                padding: 10,
                fontSize: 12,
              }}
              onClick={this.submitTask}
              disabled={!this.state.taskInput}
              >
                Add new To-do
              </button>
            </div>
        </div>
        <ListDisplay
          tasks={this.props.tasks}
          destroyTask={this.props.destroyTask}
          completeTask={this.props.completeTask}
        />
      </div>
    );
  };
};

export default TodoList;
