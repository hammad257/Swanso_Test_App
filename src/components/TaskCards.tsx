import React from 'react';
// import Card from "styled-components";
import { Task } from '../data/types';
import styled from 'styled-components';

 const Card = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin: 10px;
`;

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card>
      <h3>{task.name}</h3>
    </Card>
  );
};

export default TaskCard;
