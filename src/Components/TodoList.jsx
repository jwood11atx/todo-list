import React from 'react';
import { Redirect } from 'react-router-dom'

import ListDisplay from './ListDisplay.jsx';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      taskInput: '',
      redirect: false,
    };

    this.taskInputChange = this.taskInputChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    const taskInputField = document.getElementsByClassName('add-task')[0];
    taskInputField.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.submitTask();
    });

    this.props.getTasks();
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

  redirect(task) {
    this.props.selectTask(task)
    this.setState({ redirect: true, taskId: task.id });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={`/task/${this.state.taskId}`} />
    }

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
          redirect={this.redirect}
        />
      </div>
    );
  };
};

export default TodoList;
