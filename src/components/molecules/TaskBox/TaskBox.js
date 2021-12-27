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

const TaskBox = ({ isSmall, notesData: { title, text }, ...props }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <Wrapper>
      <ContentWrapper>
        <Header isSmall>{title}</Header>
        <Text>{text}</Text>
      </ContentWrapper>
      <ButtonWrapper>
        <Button isSmall>
          <MoreIcon />
        </Button>
        <Button isSmall>
          <CheckIcon />
        </Button>
        <Button isSmall onClick={() => deleteNote(title)}>
          <DeleteIcon />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TaskBox;
