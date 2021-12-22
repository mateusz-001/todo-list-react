import { Header } from 'components/atoms/Header';
import TaskBoxDone from 'components/molecules/TaskBoxDone/TaskBoxDone';
import React from 'react';
import { Wrapper } from './DoneTasks.styles';
import { TaskWrapper } from './DoneTasks.styles';

const DoneTasks = () => {
  return (
    <Wrapper>
      <Header>Done tasks</Header>
      <TaskWrapper>
        <TaskBoxDone />
        <TaskBoxDone />
        <TaskBoxDone />
      </TaskWrapper>
    </Wrapper>
  );
};

export default DoneTasks;
