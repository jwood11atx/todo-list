import React from 'react';

import ListDisplay from './ListDisplay.jsx';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      taskInput: '',
    };

    this.taskInputChange = this.taskInputChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.destroyTodo = this.destroyTodo.bind(this);
  }

  componentDidMount() {
    const taskInputField = document.getElementsByClassName('add-task')[0];
    taskInputField.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.createTodo(e);
    });
  }

  taskInputChange(e) {
    this.setState({ taskInput: e.target.value });
  }

  createTodo(e) {
    if (this.state.taskInput) {
      const tasks = [...this.state.tasks];

      tasks.push({
        id: Date.now(),
        title: this.state.taskInput,
        completed: false,
      });

      this.setState({ tasks, taskInput: '' });
      document.getElementsByClassName('add-task')[0].focus();
    }
  }

  completeTodo(todo) {
    const { tasks } = this.state;
    todo.completed = true;

    this.setState({ tasks });
  }

  destroyTodo(idx) {
    const { tasks } = this.state;

    this.setState({
      tasks: [
        ...tasks.slice(0, idx),
        ...tasks.slice(idx + 1, tasks.length),
      ],
    });
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
              onClick={this.createTodo}
              disabled={!this.state.taskInput}
              >
                Add new To-do
              </button>
            </div>
        </div>
        <ListDisplay
          tasks={this.state.tasks}
          destroyTodo={this.destroyTodo}
          completeTodo={this.completeTodo}
        />
      </div>
    );
  };
};

export default TodoList;
