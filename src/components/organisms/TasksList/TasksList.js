import { Header } from 'components/atoms/Header';
import TaskBox from 'components/molecules/TaskBox/TaskBox';
import PropTypes from 'prop-types';
import { NotesContext } from 'providers/NotesProvider';
import React, { useContext } from 'react';
import { NoteShape } from 'types';
import { Wrapper } from './TasksList.styles';
import { TaskWrapper } from './TasksList.styles';
import { Text } from 'components/atoms/Text';

const TasksList = ({ isBig, ...props }) => {
  const { undoneItems } = useContext(NotesContext);

  return (
    <Wrapper>
      <Header>Tasks list</Header>
      <TaskWrapper>
        {undoneItems.length ? (
          undoneItems.map((notesData) => <TaskBox key={notesData.uuid} notesData={notesData} />)
        ) : (
          <Text isBig>No tasks on list</Text>
        )}
      </TaskWrapper>
    </Wrapper>
  );
};

TasksList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(NoteShape)),
  deleteUser: PropTypes.func,
};

export default TasksList;
