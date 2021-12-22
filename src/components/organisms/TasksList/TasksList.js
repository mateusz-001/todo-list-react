import { Header } from 'components/atoms/Header';
import TaskBox from 'components/molecules/TaskBox/TaskBox';
import React from 'react';
import { Wrapper } from './TasksList.styles';
import { TaskWrapper } from './TasksList.styles';

const TasksList = () => {
  return (
    <Wrapper>
      <Header>Tasks list</Header>
      <TaskWrapper>
        <TaskBox />
        <TaskBox />
        <TaskBox />
      </TaskWrapper>
    </Wrapper>
  );
};

export default TasksList;
