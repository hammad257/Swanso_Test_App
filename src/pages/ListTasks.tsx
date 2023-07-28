import React from 'react';
import TaskList from '../components/TaskList';
import { tasks } from '../data/data';

const ListTasks: React.FC = () => {
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ListTasks;
