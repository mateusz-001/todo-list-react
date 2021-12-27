import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate';
import AddTask from 'components/organisms/AddTask/AddTask';
import TasksList from 'components/organisms/TasksList/TasksList';
import DoneTasks from 'components/organisms/DoneTasks/DoneTasks';
import NotesProvider from 'providers/NotesProvider';

const Root = () => {
  return (
    <NotesProvider>
      <Router>
        <Wrapper>
          <MainTemplate>
            <Routes>
              <Route path="/" element={<AddTask />} />
              <Route path="/list" element={<TasksList />} />
              <Route path="/done" element={<DoneTasks />} />
            </Routes>
          </MainTemplate>
        </Wrapper>
      </Router>
    </NotesProvider>
  );
};

export default Root;
