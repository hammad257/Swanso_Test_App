import React from 'react';
import TaskCard from './TaskCards';
import { Task } from '../data/types';
// import ListContainer from 'styled-components';
import styled from 'styled-components';

 const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ListContainer>
  );
};

export default TaskList;
