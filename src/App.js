import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import ListTasks from './pages/ListTasks';
import CreateTask from './pages/CreateTasks';
import BulkDelete from './pages/BulkDelete';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list-tasks" component={ListTasks} />
        <Route path="/create-task" component={CreateTask} />
        <Route path="/bulk-delete" component={BulkDelete} />
      </Switch>
    </Router>
  );
}

export default App;