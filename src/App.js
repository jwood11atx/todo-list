import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoList from './containers/TodoListContainer';
import TaskDetail from './containers/TaskDetailContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/task/:id" component={TaskDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
