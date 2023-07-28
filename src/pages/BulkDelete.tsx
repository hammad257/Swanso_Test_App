import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import { tasks } from '../data/data';
import { Task } from '../data/types';
// import { BulkDeleteContainer } from 'styled-components';
import styled from 'styled-components';

export const BulkDeleteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BulkDelete: React.FC = () => {
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const handleCheckboxChange = (taskId: number) => {
    const isChecked = checkedTasks.includes(taskId);
    if (isChecked) {
      setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
    } else {
      setCheckedTasks([...checkedTasks, taskId]);
    }
  };

  const handleDeleteTasks = () => {
    const updatedTasks: Task[] = tasks.filter(
      (task) => !checkedTasks.includes(task.id)
    );
    tasks.splice(0, tasks.length, ...updatedTasks);
    setCheckedTasks([]);
  };

  return (
    <div>
      <h1>Bulk Delete</h1>
      <BulkDeleteContainer>
        <TaskList tasks={tasks} />
        <button onClick={handleDeleteTasks}>Delete</button>
      </BulkDeleteContainer>
      {checkedTasks.length === 0 && <p>No tasks selected.</p>}
    </div>
  );
};

export default BulkDelete;
