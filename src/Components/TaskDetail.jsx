import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TaskDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      title: '',
      description: '',
      completed: null,
      redirect: false,
    };
  }

  componentDidMount() {
    const storedTask = JSON.parse(localStorage.getItem('task'));
    if (this.props.tasks.length) {
      this.setState(this.props.selectedTask);
      this.storeLocally(this.props.selectedTask);
    } else if (storedTask.id === Number(this.props.match.params.id)) {
      this.setState(storedTask);
      this.props.selectTask({ id: storedTask.id });
      this.props.getTasks();
    } else {
      this.setState({ redirect: true })
    }
  }

  handleChange(type, e) {
    this.setState({ [type]: e.target.value });
    this.storeLocally();
  }

  storeLocally() {
    setTimeout(() => {
      localStorage.setItem('task', JSON.stringify(this.state));
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    const { id, title, description, completed } = this.state;
    return (
      <div className="task-input-wrapper">
        <div style={{ textAlign: 'left', marginTop: '50px' }}>
          <Link className="route-link back-btn" to='/'>{'< Back to Tasks'}</Link>
        </div>
        <div style={{ display: 'flex' }}>
          <TextField
            id="title-input"
            label="Task"
            value={title}
            multiline
            onChange={(e) => this.handleChange('title', e)}
            margin="normal"
            style={{ margin: '10px', width: '100%' }}
            disabled={completed}
          />

            <Button
              variant="contained"
              size='small'
              style={{ height: '20px', width: '100px', fontWeight: 'bold', margin: 'auto' }}
              onClick={() => {
                this.props.updateTask({ id, title, description });
                this.props.completeTask(id);
                this.setState({ redirect: true });
              }}
              disabled={completed}
            >
                Complete
            </Button>
        </div>
        <TextField
          id="description-input"
          label="Description"
          value={description}
          multiline
          onChange={(e) => this.handleChange('description', e)}
          margin="normal"
          style={{ margin: '10px', width: '100%' }}
          disabled={completed}
        />
        <div>
          <Button
            style={{ margin: '5px' }}
            variant='contained'
            size='small'
            color='primary'
            onClick={() => {
              const { id, title, description, completed } = this.state;
              this.props.updateTask({ id, title, description });
              this.setState({ redirect: true });
            }}
            disabled={completed || !title}
          >
              save
          </Button>
          <Button
            style={{ margin: '5px' }}
            variant='contained'
            size='small'
            onClick={() => {
              this.setState(this.props.selectedTask);
              this.storeLocally();
            }}
            disabled={completed}
          >
              cancel
          </Button>
          <Button
            style={{ margin: '5px' }}
            variant='contained'
            size='small'
            color='secondary'
            onClick={() => {
              this.props.destroyTask(id);
              this.setState({ redirect: true });
            }}
          >
              delete
          </Button>
        </div>
      </div>
    );
  }
};

export default TaskDetail;
