import { Header } from 'components/atoms/Header';
import TaskBox from 'components/molecules/TaskBox/TaskBox';
import PropTypes from 'prop-types';
import { NotesContext } from 'providers/NotesProvider';
import React, { useContext } from 'react';
import { NoteShape } from 'types';
import { Wrapper } from './TasksList.styles';
import { TaskWrapper } from './TasksList.styles';

const TasksList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <Wrapper>
      <Header>Tasks list</Header>
      <TaskWrapper>
        {notes.map((notesData) => (
          <TaskBox key={notesData.title} notesData={notesData} />
        ))}
      </TaskWrapper>
    </Wrapper>
  );
};

TasksList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NoteShape)),
  deleteUser: PropTypes.func,
};

export default TasksList;
