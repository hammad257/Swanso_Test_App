import React from 'react';
import { Redirect } from 'react-router-dom';

const Home: React.FC = () => {
  return <Redirect to="/list-tasks" />;
};

export default Home;
