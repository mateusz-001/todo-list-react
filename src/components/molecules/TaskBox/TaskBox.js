import React, { useContext } from 'react';
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { Text } from 'components/atoms/Text';
import { Button } from 'components/atoms/Button';
import { Wrapper } from './TaskBox.styles';
import { ContentWrapper } from './TaskBox.styles';
import { ButtonWrapper } from './TaskBox.styles';
import { Header } from 'components/atoms/Header';
import { NotesContext } from 'providers/NotesProvider';

const TaskBox = ({ isSmall, isDone, notesData: { title, text, uuid }, ...props }) => {
  const { deleteNote } = useContext(NotesContext);
  const { toggleDone } = useContext(NotesContext);

  return (
    <Wrapper>
      <ContentWrapper>
        {title.length > 20 ? <Header isSmall>{`${title.substr(0, 20)}...`}</Header> : <Header isSmall>{title}</Header>}
        {text.length > 30 ? <Text>{`${text.substr(0, 32)}...`}</Text> : <Text>{text}</Text>}
      </ContentWrapper>
      <ButtonWrapper>
        <Button isSmall onClick={() => toggleDone(uuid)}>
          <CheckIcon />
        </Button>
        <Button isSmall onClick={() => deleteNote(uuid)}>
          <DeleteIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskBox;
