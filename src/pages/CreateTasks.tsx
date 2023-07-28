import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { tasks } from '../data/data';

const CreateTask: React.FC = () => {
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleCreateTask = () => {
    const newTask: any = {
      id: tasks.length + 1,
      name: name,
    };
    tasks.push(newTask);
    setRedirect(true);
  };

  return (
    <div>
      <h1>Create Task</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreateTask}>Create</button>
      {redirect && <Redirect to="/list-tasks" />}
    </div>
  );
};

export default CreateTask;
