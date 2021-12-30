import { Header } from 'components/atoms/Header';
import TaskBoxDone from 'components/molecules/TaskBoxDone/TaskBoxDone';
import React, { useContext, useState } from 'react';
import { Wrapper } from './DoneTasks.styles';
import { TaskWrapper } from './DoneTasks.styles';
import PropTypes from 'prop-types';
import { NotesContext } from 'providers/NotesProvider';
import { NoteShape } from 'types';
import { Text } from 'components/atoms/Text';

const DoneTasks = ({ notes, isBig, ...props }) => {
  const { doneItems } = useContext(NotesContext);

  return (
    <Wrapper>
      <Header>Done tasks</Header>
      <TaskWrapper>
        {doneItems.length ? (
          doneItems.map((notesData) => <TaskBoxDone key={notesData.uuid} notesData={notesData} />)
        ) : (
          <Text isBig>Nothing is done</Text>
        )}
      </TaskWrapper>
    </Wrapper>
  );
};

DoneTasks.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NoteShape)),
  deleteUser: PropTypes.func,
};

export default DoneTasks;
