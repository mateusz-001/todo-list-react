import React, { useContext } from 'react';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as ListIcon } from 'assets/icons/list.svg';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { Text } from 'components/atoms/Text';
import { Wrapper, Link } from './Navigation.styles';
import { NotesContext } from 'providers/NotesProvider';

const Navigation = ({ navText, ...props }) => {
  const { doneItems } = useContext(NotesContext);
  const { undoneItems } = useContext(NotesContext);

  return (
    <Wrapper>
      <Link to="/">
        <AddIcon />
      </Link>
      <Link to="list">
        <ListIcon />
        <Text navText>{undoneItems.length}</Text>
      </Link>
      <Link to="done">
        <DoneIcon />
        <Text navText>{doneItems.length}</Text>
      </Link>
    </Wrapper>
  );
};

export default Navigation;
